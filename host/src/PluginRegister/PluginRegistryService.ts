import type {
  CommandPluginTypes,
  CommandContext,
  CommandDescriptor,
  CommandExecuteFor,
  CommandResult,
  PluginContext,
  PluginMeta,
  PluginTypes,
} from "@acme/plugin-contracts";

const GLOBAL_PLUGIN_REGISTRY_KEY = "__acme_plugin_registry__";

export type RegisteredPlugin = {
  plugin: PluginMeta;
  mount?: (
    container: HTMLDivElement,
    ctx: PluginContext<PluginTypes>,
  ) => (() => void) | void;
  command?: CommandDescriptor<CommandPluginTypes>;
  execute?: CommandExecuteFor<CommandPluginTypes>;
};

export type PluginRegistry = Map<
  PluginTypes,
  Map<string, RegisteredPlugin>
>;

/**
 * Registro dei plugin Definiti
 * Permette di evitare che la define definisca più volte lo stesso custom tag
 * Definito su globalThis per evitare evitare che la presenza di piu bundle di plugin creino registry differenti
 */
export function getGlobalPluginRegistry(): PluginRegistry {
  const runtimeGlobal = globalThis as typeof globalThis & {
    [GLOBAL_PLUGIN_REGISTRY_KEY]?: PluginRegistry;
  };

  runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY] ??= new Map();

  return runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY];
}

/** Registro condiviso tra bundle multipli sullo stesso host runtime. */
const pluginRegistry = getGlobalPluginRegistry();

/** Fornisce il plugin dal registry */
export function getPluginFromRegistry(
  type: PluginTypes,
  id: string,
): RegisteredPlugin | undefined {
  return pluginRegistry.get(type)?.get(id);
}

export function getCommandDescriptorFromRegistry<T extends CommandPluginTypes>(
  type: T,
  id: string,
): CommandDescriptor<T> | undefined {
  const registration = pluginRegistry.get(type)?.get(id);
  return registration?.command as CommandDescriptor<T> | undefined;
}

export async function executeRegisteredCommand<T extends CommandPluginTypes>(
  type: T,
  id: string,
  pluginContext: PluginContext<T>,
  commandContext: CommandContext,
): Promise<CommandResult> {
  const registration = pluginRegistry.get(type)?.get(id);
  if (!registration || typeof registration.execute !== "function") {
    throw new Error(`Command plugin "${id}" (${type}) is not executable`);
  }
  return (
    registration as RegisteredPlugin & {
      execute: CommandExecuteFor<T>;
    }
  ).execute(pluginContext, commandContext);
}

/** Registra la Definizione del plugin sul registry, assicurandosi che il Map per Type si presente o meno */
export function setPluginInTypeRegistry(
  plugin: PluginMeta,
  registration: Omit<RegisteredPlugin, "plugin">,
): void {
  const type = plugin.type;
  let typeRegistry = pluginRegistry.get(type);
  if (!typeRegistry) {
    typeRegistry = new Map<string, RegisteredPlugin>();
    pluginRegistry.set(type, typeRegistry);
  }
  typeRegistry.set(plugin.id, { plugin, ...registration });
}
