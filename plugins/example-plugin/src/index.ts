import { definePlugin } from "@acme/plugin-react";
import { registerReactPluginWebComponent } from "@acme/plugin-runtime";
import { PluginRoot } from "./PluginRoot";
import { META } from "./meta";

const plugin = definePlugin({
  ...META,
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
