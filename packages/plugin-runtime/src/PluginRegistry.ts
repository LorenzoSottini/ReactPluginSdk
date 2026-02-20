import type { PluginContext, PluginMeta, PluginTypes } from "@acme/plugin-contracts";

const GLOBAL_PLUGIN_REGISTRY_KEY = "__acme_plugin_registry__";

export type RegisteredPlugin = {
  plugin: PluginMeta;
  mount: (
    container: HTMLDivElement,
    ctx: PluginContext<PluginTypes>,
  ) => (() => void) | void;
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

/** Registra la Definizione del plugin sul registry, assicurandosi che il Map per Type si presente o meno */
export function setPluginInTypeRegistry(
  plugin: PluginMeta,
  mount: RegisteredPlugin["mount"],
): void {
  const type = plugin.type;
  let typeRegistry = pluginRegistry.get(type);
  if (!typeRegistry) {
    typeRegistry = new Map<string, RegisteredPlugin>();
    pluginRegistry.set(type, typeRegistry);
  }
  typeRegistry.set(plugin.id, { plugin, mount });
}
