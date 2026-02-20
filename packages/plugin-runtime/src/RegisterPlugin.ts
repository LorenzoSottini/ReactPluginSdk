import {
  composeTagName,
  type PluginContext,
  type PluginElementWithCtx,
  type PluginMeta,
  type PluginTypes,
} from "@acme/plugin-contracts";
import {
  getPluginFromRegistry,
  setPluginInTypeRegistry,
} from "./PluginRegistry";

export const PLUGIN_ID_ATTR = "plugin-id";

export type PluginMount<PT extends PluginTypes> = (
  container: HTMLDivElement,
  ctx: PluginContext<PT>,
) => (() => void) | void;

export function registerPluginWebComponent<PT extends PluginTypes>({
  plugin,
  mount,
}: {
  plugin: PluginMeta & { type: PT };
  mount: PluginMount<PT>;
}) {
  const type = plugin.type;
  const tag = composeTagName(plugin.id, plugin.type);

  setPluginInTypeRegistry(plugin, (container, ctx) =>
    mount(container, ctx as PluginContext<PT>),
  );

  class PluginElement extends HTMLElement implements PluginElementWithCtx {
    ctx!: PluginContext;

    private unmount?: () => void;
    private container?: HTMLDivElement;
    private shadow?: ShadowRoot;

    connectedCallback() {
      if (this.unmount) return;

      const element = this as Partial<PluginElementWithCtx>;
      const ctx = element.ctx;
      if (!ctx) {
        throw new Error("Context not provided!");
      }

      const pluginId = this.getAttribute(PLUGIN_ID_ATTR);
      if (!pluginId) {
        throw new Error(`Missing ${PLUGIN_ID_ATTR} attribute!`);
      }

      const registration = getPluginFromRegistry(type, pluginId);
      if (!registration) {
        throw new Error(
          `Plugin not registered for type "${type}" and id "${pluginId}"`,
        );
      }
      if (ctx.manifest.type !== type) {
        throw new Error(
          `Context type mismatch: expected "${type}", got "${ctx.manifest.type}"`,
        );
      }

      this.shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      this.container = document.createElement("div");
      this.shadow.replaceChildren(this.container);

      const teardown = registration.mount(
        this.container,
        ctx as PluginContext<PluginTypes>,
      );
      if (typeof teardown === "function") this.unmount = teardown;
    }

    disconnectedCallback() {
      this.unmount?.();
      this.unmount = undefined;
      this.container?.remove();
      this.container = undefined;
      this.shadow = undefined;
    }
  }

  if (!customElements.get(tag)) {
    customElements.define(tag, PluginElement);
  }
}
