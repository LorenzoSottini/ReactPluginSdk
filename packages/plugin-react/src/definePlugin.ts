import {
  CommandDescriptor,
  CommandExecuteFor,
  CommandPluginTypes,
  CommandPluginDefinition,
  MountFunction,
  PluginContext,
  PluginMeta,
  StandardPluginDefinition,
  StandardPluginTypes,
} from "@acme/plugin-contracts";
import { ComponentType, createElement } from "react";
import ReactDOM from "react-dom/client";
import { PluginProvider } from "./plugin-context";
import {
  validateActivate,
  validateBaseCommand,
  validateBaseConfig,
  validateId,
  validateKnownPluginType,
  validateRoot,
} from "./validationConfig";

export type DefineConfig<PT extends StandardPluginTypes> = PluginMeta & {
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

export type DefineCommandConfig<
  PT extends CommandPluginTypes = CommandPluginTypes,
> = PluginMeta & {
  type: PT;
  command: CommandDescriptor<PT>;
  execute: CommandExecuteFor<PT>;
  Root?: ComponentType;
  activate?: (ctx: PluginContext<PT>) => void | (() => void);
};

/** Validazione della config */
function validateConfig<PT extends StandardPluginTypes>(
  config: DefineConfig<PT>,
): void {
  validateBaseConfig(config);
  validateId(config);
  validateKnownPluginType(config);
  validateRoot(config, true);
  validateActivate(config);
}

function createReactMount<PT extends StandardPluginTypes | CommandPluginTypes>(
  Root: ComponentType,
  activate: ((ctx: PluginContext<PT>) => void | (() => void)) | undefined,
  pluginName: string,
): MountFunction<PT> {
  return (container: HTMLDivElement, ctx: PluginContext<PT>) => {
    const root = ReactDOM.createRoot(container);
    root.render(PluginProvider(ctx, createElement(Root)));

    let cleanup: (() => void) | undefined;
    if (activate) {
      console.log(`Plugin Activated: ${pluginName}`);
      const result = activate(ctx);
      if (typeof result === "function") cleanup = result;
    }

    return () => {
      cleanup?.();
      root.unmount();
      console.log(`Plugin Deactivated: ${pluginName}`);
    };
  };
}

export function definePlugin<PT extends StandardPluginTypes>(
  config: DefineConfig<PT>,
): StandardPluginDefinition<PT> {
  validateConfig(config);

  const { Root, activate, ...meta } = config;
  const mount = createReactMount<PT>(Root, activate, config.name);
  return { ...(meta satisfies PluginMeta), mount };
}

export function defineCommandPlugin<PT extends CommandPluginTypes>(
  config: DefineCommandConfig<PT>,
): CommandPluginDefinition<PT> {
  validateBaseConfig(config);
  validateId(config);
  validateBaseCommand(config);
  validateRoot(config, false);
  validateActivate(config);

  const { Root, activate, command, execute, ...meta } = config;
  const mount = Root
    ? createReactMount<PT>(Root, activate, config.name)
    : undefined;

  return {
    ...(meta satisfies PluginMeta),
    command,
    execute,
    ...(mount ? { mount } : {}),
  };
}
