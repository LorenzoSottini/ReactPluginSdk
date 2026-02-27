import {
  PLUGIN_TYPES,
  composeTagName,
  type CommandPluginDefinition,
  type CommandPluginTypes,
  type StandardPluginDefinition,
  type StandardPluginTypes,
  type PluginContext,
  type PluginDefinition,
  type PluginElementWithCtx,
  type PluginTypes,
} from "@acme/plugin-contracts";
import {
  getPluginFromRegistry,
  setPluginInTypeRegistry,
} from "./PluginRegistryService";

export const PLUGIN_ID_ATTR = "plugin-id";

export function registerPluginWebComponent<PT extends PluginTypes>(
  pluginDefinition: PluginDefinition<PT>,
) {
  const { type, id } = pluginDefinition;

  const tag = composeTagName(id, type);
  if (customElements.get(tag)) {
    console.warn(`Plugin ${id} already registered`);
    return;
  }

  const isCommandType =
    type === PLUGIN_TYPES.COMMAND || type === PLUGIN_TYPES.COMMAND_PROFILATION;

  if (isCommandType) {
    const commandPlugin =
      pluginDefinition as CommandPluginDefinition<CommandPluginTypes>;
    if (typeof commandPlugin.execute !== "function") {
      throw new Error(`Missing execute function in command plugin ${id}`);
    }
    if (!commandPlugin.command || !commandPlugin.command.label) {
      throw new Error(`Missing command descriptor in command plugin ${id}`);
    }

    setPluginInTypeRegistry(pluginDefinition, {
      command: commandPlugin.command,
      execute: commandPlugin.execute,
      mount:
        typeof commandPlugin.mount === "function"
          ? (container: HTMLDivElement, ctx: PluginContext<PluginTypes>) =>
              commandPlugin.mount!(
                container,
                ctx as PluginContext<CommandPluginTypes>,
              )
          : undefined,
    });
  } else {
    const standardPlugin = pluginDefinition as StandardPluginDefinition;
    const mount = standardPlugin.mount;
    if (!mount || typeof mount !== "function") {
      throw new Error(`Missing mount function in pluginDefinition of ${id}`);
    }
    setPluginInTypeRegistry(standardPlugin, {
      mount: (container: HTMLDivElement, ctx: PluginContext<PluginTypes>) =>
        mount(container, ctx as PluginContext<StandardPluginTypes>),
    });
  }

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
      if (!registration.mount) {
        return;
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
