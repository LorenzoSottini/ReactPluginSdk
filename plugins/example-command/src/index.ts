import { dispatchCommandDialogOpenEvent } from "@acme/plugin-contracts";
import { defineCommandPlugin } from "@acme/plugin-react";
import { META } from "./meta";
import { PluginRoot } from "./PluginRoot";

const plugin = defineCommandPlugin({
  ...META,
  Root: PluginRoot,
  command: {
    label: "Run example command",
  },
  async execute(ctx, commandContext) {
    dispatchCommandDialogOpenEvent(META.id, {
      commandContext,
    });

    ctx.services.toast.show(`Command executed: ${ctx.manifest.name} `);
    console.log(commandContext);
    return { status: "ok" };
  },
});

export default plugin;
