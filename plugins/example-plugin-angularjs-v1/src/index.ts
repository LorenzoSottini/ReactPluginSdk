import * as angular from "angular";
import type { PluginContext } from "@acme/plugin-contracts";
import { registerPluginWebComponent } from "@acme/plugin-runtime";
import { META } from "./meta";

type AngularContext = PluginContext<typeof META.type>;

function mountAngularPlugin(container: HTMLDivElement, ctx: AngularContext) {
  const appName = `acme.ng1.${META.id.replace(/[^a-z0-9]/gi, "_")}`;
  const app = angular.module(appName, []);
  app.constant("pluginCtx", ctx);

  class PluginRootController {
    static $inject = ["pluginCtx"] as const;

    user: AngularContext["user"];
    pluginName: string;

    constructor(private readonly pluginCtx: AngularContext) {
      this.user = pluginCtx.user;
      this.pluginName = pluginCtx.manifest.name;
    }

    showToast = () => {
      this.pluginCtx.services.toast.show(
        `[AngularJS] Action from ${this.pluginCtx.manifest.id}`,
      );
    };
  }

  app.component("pluginRoot", {
    template: `
      <section style="font-family: sans-serif; border: 1px solid #bcbcbc; border-radius: 8px; padding: 12px;">
        <h3 style="margin: 0 0 8px 0;">{{$ctrl.pluginName}}</h3>
        <p style="margin: 0 0 8px 0;">User: {{$ctrl.user.displayName}} ({{$ctrl.user.id}})</p>
        <button ng-click="$ctrl.showToast()">AngularJS v1 toast</button>
      </section>
    `,
    controller: PluginRootController,
  });

  const mountNode = document.createElement("div");
  mountNode.innerHTML = "<plugin-root></plugin-root>";
  container.replaceChildren(mountNode);

  const injector = angular.bootstrap(mountNode, [appName]);
  const rootScope = injector.get("$rootScope") as angular.IRootScopeService;

  ctx.services.toast.show(`Plugin activated: ${ctx.manifest.name}`);

  return () => {
    rootScope.$destroy();
    container.replaceChildren();
    ctx.services.toast.show(`Plugin deactivated: ${ctx.manifest.name}`);
  };
}

registerPluginWebComponent({
  plugin: META,
  mount: mountAngularPlugin,
});
