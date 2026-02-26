import {
  MountFunction,
  PLUGIN_TYPES,
  PluginContext,
  PluginDefinition,
  PluginMeta,
  PluginTypes,
} from "@acme/plugin-contracts";
import { ComponentType, createElement } from "react";
import ReactDOM from "react-dom/client";
import { PluginProvider } from "./plugin-context";

export type DefineConfig<PT extends PluginTypes> = PluginMeta & {
  type: PT;
  /** Componente da renderizzare nel plugin */
  Root: ComponentType;
  /**
   * Hook opzionale di lifecycle:
   * - viene chiamato quando l'istanza del plugin viene montata nel WebComponent
   * - riceve il ctx host
   * - puo ritornare una funzione di cleanup, eseguita allo smontaggio
   */
  activate?: (ctx: PluginContext<PT>) => void | (() => void);
};

/** Validazione della config */
function validateConfig<PT extends PluginTypes>(
  config: DefineConfig<PT>,
): void {
  if (!config || typeof config !== "object") {
    throw new Error("Invalid config: expected object");
  }

  if (typeof config.id !== "string" || config.id.trim().length === 0) {
    throw new Error("Invalid config: 'id' is required");
  }

  if (typeof config.type !== "string" || !(config.type in PLUGIN_TYPES)) {
    throw new Error(
      `Invalid config: 'type' must be one of ${Object.keys(PLUGIN_TYPES).join(
        ", ",
      )}`,
    );
  }

  if (typeof config.Root !== "function") {
    throw new Error("Invalid config: 'Root' must be a component");
  }

  if (config.activate !== undefined && typeof config.activate !== "function") {
    throw new Error("Invalid config: 'activate' must be a function");
  }
}

export function definePlugin<PT extends PluginTypes>(
  config: DefineConfig<PT>,
): PluginDefinition<PT> {
  validateConfig(config);

  const { Root, activate, ...meta } = config;

  // Mount del plugin nel container
  // In fase di register Plugin l'host invoca la mount passando il container e il ctx
  const mount: MountFunction<PT> = (
    container: HTMLDivElement,
    ctx: PluginContext<PT>,
  ) => {
    const root = ReactDOM.createRoot(container);
    // Renderizzazione del pluginRoot con il provider
    root.render(PluginProvider(ctx, createElement(Root)));

    let cleanup: (() => void) | undefined;
    if (activate) {
      console.log(`Plugin Activated: ${meta.name}`);
      const result = activate(ctx);
      if (typeof result === "function") cleanup = result;
    }

    return () => {
      cleanup?.();
      root.unmount();
      console.log(`Plugin Deactivated: ${config.name}`);
    };
  };

  return { ...(meta satisfies PluginMeta), mount };
}
