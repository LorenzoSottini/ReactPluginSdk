import type { PluginContext } from "@acme/plugin-contracts";
import { META } from "./meta";

type Context = PluginContext<typeof META.type>;

export class PluginRootController {
  static $inject = ["pluginCtx"] as const;

  user: Context["user"];
  manifest: Context["manifest"];
  val = "";

  constructor(private readonly pluginCtx: Context) {
    this.user = pluginCtx.user;
    this.manifest = pluginCtx.manifest;
  }

  sendMessageToHost = () => {
    this.pluginCtx.services.toast.show(`Hello from plugin:${this.val}`);
  };
}
