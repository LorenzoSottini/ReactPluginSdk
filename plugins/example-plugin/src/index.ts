import { definePlugin } from "@acme/plugin-react";
import { registerReactPluginWebComponent } from "@acme/plugin-runtime";
import { CONTRACT_VERSION, PLUGIN_TYPES } from "@acme/plugin-contracts";
import { PluginRoot } from "./PluginRoot";

const plugin = definePlugin({
  type: PLUGIN_TYPES.WIDGET,
  id: "acme.example-plugin",
  contractVersion: CONTRACT_VERSION,
  Root: PluginRoot,
  activate(ctx) {
    ctx.services.toast.show("Plugin activated");
    return () => ctx.services.toast.show("Plugin deactivated");
  },
});

registerReactPluginWebComponent({
  plugin,
});
