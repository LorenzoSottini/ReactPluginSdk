import { definePlugin } from "@acme/plugin-react";
import { registerReactPluginWebComponent } from "@acme/plugin-runtime";
import { CONTRACT_VERSION, PLUGIN_TYPES } from "@acme/plugin-contracts";
import { PluginRoot } from "./PluginRoot";
import * as manifest from "../plugin.manifest.json";

const plugin = definePlugin({
  type: PLUGIN_TYPES.ROUTE,
  id: manifest.id,
  contractVersion: CONTRACT_VERSION,

  Root: PluginRoot,
  activate(ctx) {
    ctx.services.toast.show(`Plugin activated: ${ctx.manifest.name}`);
    return () =>
      ctx.services.toast.show(`Plugin deactivated ${ctx.manifest.name}`);
  },
});

registerReactPluginWebComponent({
  plugin,
});
