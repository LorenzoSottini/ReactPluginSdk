import React from "react";
import ReactDOM from "react-dom/client";
import type { PluginDefinition } from "@acme/plugin-react";
import type { PluginContext, PluginTypes } from "@acme/plugin-contracts";
import { PluginProvider } from "@acme/plugin-react";
import { registerPluginWebComponent } from "./RegisterPlugin";
export { PLUGIN_ID_ATTR } from "./RegisterPlugin";

/** Funzione che si occupa di Definire i WebComponent con rispettivo tag */
export function registerReactPluginWebComponent<
  PT extends PluginTypes = PluginTypes,
>({ plugin }: { plugin: PluginDefinition<PT> }) {
  registerPluginWebComponent({
    plugin,
    mount: (container, ctx) => {
      const root = ReactDOM.createRoot(container);
      root.render(PluginProvider(ctx, React.createElement(plugin.Root)));

      let cleanup: (() => void) | undefined;
      if (plugin.activate) {
        const result = plugin.activate(ctx as PluginContext<PT>);
        if (typeof result === "function") cleanup = result;
      }

      return () => {
        cleanup?.();
        root.unmount();
      };
    },
  });
}
