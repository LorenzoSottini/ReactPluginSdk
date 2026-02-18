import React from "react";
import ReactDOM from "react-dom/client";
import type { PluginDefinition } from "@acme/plugin-react";
import type { PluginContext, PluginElementWithCtx } from "@acme/plugin-contracts";
import { PluginProvider } from "@acme/plugin-react";

export function registerReactPluginWebComponent(options: {
  tag: string;
  plugin: PluginDefinition;
}) {
  class PluginElement extends HTMLElement {
    private root?: ReactDOM.Root;
    private cleanup?: () => void;
    private container?: HTMLDivElement;

    connectedCallback() {
      if (this.root) return;

      const self = this as PluginElementWithCtx;

      if (!self.ctx) {
        throw new Error("Context not provided!");
      }

      const ctx: PluginContext = self.ctx;

      this.container = document.createElement("div");
      this.appendChild(this.container);

      this.root = ReactDOM.createRoot(this.container);
      this.root.render(PluginProvider(ctx, React.createElement(options.plugin.Root)));

      if (options.plugin.activate) {
        const result = options.plugin.activate(ctx);
        if (typeof result === "function") this.cleanup = result;
      }
    }

    disconnectedCallback() {
      this.cleanup?.();
      this.cleanup = undefined;
      this.root?.unmount();
      this.root = undefined;
      this.container?.remove();
      this.container = undefined;
    }
  }

  if (!customElements.get(options.tag)) {
    customElements.define(options.tag, PluginElement);
  }
}
