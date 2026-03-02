import * as angular from "angular";
import type { PluginContext } from "@acme/plugin-contracts";
import { META } from "./meta";
import { PluginRootController } from "./plugin-root.controller";

type Context = PluginContext<typeof META.type>;

function mountAngularPlugin(container: HTMLDivElement, ctx: Context) {
  const appName = `acme.ng1.${META.id.replace(/[^a-z0-9]/gi, "_")}`;
  const app = angular.module(appName, []);
  app.constant("pluginCtx", ctx);

  app.component("pluginRoot", {
    template: `
      <section style="font-family: sans-serif; border: 1px solid #ccc; border-radius: 8px; padding: 10px;">
        <h3 style="margin: 0 0 8px 0;">{{$ctrl.manifest.name}}</h3>
        <p style="margin: 0 0 8px 0;">Utente from Host: {{$ctrl.user.displayName}}</p>

        <label>Dettagli del manifest from Host</label>
        <ul style="text-align: left; margin: 8px 0 12px 0;">
          <li><strong>id:</strong> {{$ctrl.manifest.id}}</li>
          <li><strong>name:</strong> {{$ctrl.manifest.name}}</li>
          <li><strong>type:</strong> {{$ctrl.manifest.type}}</li>
          <li><strong>contractVersion:</strong> {{$ctrl.manifest.contractVersion}}</li>
          <li><strong>version:</strong> {{$ctrl.manifest.version}}</li>
        </ul>

        <div style="display: flex; gap: 6px;">
          <input
            type="text"
            placeholder="Notifica all'host"
            ng-model="$ctrl.val"
          />
          <button ng-click="$ctrl.sendMessageToHost()" type="button">
            Send message in console
          </button>
        </div>
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

const plugin = {
  ...META,
  mount: mountAngularPlugin,
};

export default plugin;
