import React from "react";
import ReactDOM from "react-dom/client";
import type { PluginDefinition } from "@acme/plugin-react";
import type {
  PluginContext,
  PluginTypes,
  PluginTags,
  PluginElementWithCtx,
} from "@acme/plugin-contracts";
import { PLUGIN_TAGS } from "@acme/plugin-contracts";
import { PluginProvider } from "@acme/plugin-react";
import {
  getPluginFromRegistry,
  setPluginInTypeRegistry,
} from "./PluginRegistry";

const PLUGIN_ID_ATTR = "plugin-id";

/** Funzione che si occupa di Definire i WebComponent con rispettivo tag */
export function registerReactPluginWebComponent<
  PT extends PluginTypes = PluginTypes,
>({ plugin }: { plugin: PluginDefinition<PT> }) {
  const type = plugin.type;
  const tag: PluginTags = PLUGIN_TAGS[type];

  // Aggiornamento del registry
  setPluginInTypeRegistry(plugin as unknown as PluginDefinition<PluginTypes>);

  // Definizione del WebComponent
  class PluginElement extends HTMLElement implements PluginElementWithCtx {
    ctx!: PluginContext;

    private root?: ReactDOM.Root;
    private cleanup?: () => void;
    private container?: HTMLDivElement;
    private shadow?: ShadowRoot;

    connectedCallback() {
      if (this.root) return;

      const _element = this as Partial<PluginElementWithCtx>;
      const ctx = _element.ctx;
      if (!ctx) {
        throw new Error("Context not provided!");
      }
      const pluginId = this.getAttribute(PLUGIN_ID_ATTR);
      if (!pluginId) {
        throw new Error(`Missing ${PLUGIN_ID_ATTR} attribute!`);
      }

      const plugin = getPluginFromRegistry(type, pluginId);

      if (!plugin) {
        throw new Error(
          `Plugin not registered for type "${type}" and id "${pluginId}"`,
        );
      }
      if (ctx.manifest.type !== type) {
        throw new Error(
          `Context type mismatch: expected "${type}", got "${ctx.manifest.type}"`,
        );
      }

      // Composizione dello shadowDom per isolare il componente
      this.shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      this.container = document.createElement("div");
      this.shadow.replaceChildren(this.container);

      // Creazione della root React e render del Plugin con relativo provider
      this.root = ReactDOM.createRoot(this.container);
      this.root.render(PluginProvider(ctx, React.createElement(plugin.Root)));

      // Esegue il setup opzionale del plugin.
      // Se activate ritorna una funzione, viene salvata per l'unmount.
      if (plugin.activate) {
        const result = plugin.activate(ctx as PluginContext<PT>);
        if (typeof result === "function") this.cleanup = result;
      }
    }

    disconnectedCallback() {
      // Teardown del plugin (se fornito da activate).
      this.cleanup?.();
      this.cleanup = undefined;
      this.root?.unmount();
      this.root = undefined;
      this.container?.remove();
      this.container = undefined;
      this.shadow = undefined;
    }
  }

  /**
   * Controllo che nei customElements della window non sia gia definito il WebComponet by tag del plugin
   * Evita di ridefinire il tag e previene error: Failed to execute 'define' on 'CustomElementRegistry': the name "TAG" has already been used with this registry
   */
  if (!customElements.get(tag)) {
    customElements.define(tag, PluginElement);
  }
}
