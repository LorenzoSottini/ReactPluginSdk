import { definePlugin } from "@acme/plugin-react";
import { registerReactPluginWebComponent } from "@acme/plugin-runtime";
import { PluginRoot } from "./PluginRoot";

const plugin = definePlugin({
  id: "acme.example-plugin",
  contractVersion: "1.0",
  Root: PluginRoot,
  activate(ctx) {
    ctx.services.toast.show("Plugin activated");
    return () => ctx.services.toast.show("Plugin deactivated");
  },
});

registerReactPluginWebComponent({
  tag: "acme-example-plugin",
  plugin,
});
