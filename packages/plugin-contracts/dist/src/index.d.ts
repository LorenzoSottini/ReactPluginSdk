import { PluginDefinition } from "./DefinitionsTypes";
import { PluginTypes } from "./Plugin";
export { CONTRACT_VERSION, PLUGIN_TYPES, composeTagName } from "./Plugin";
export type { PluginManifest, PluginMeta, PluginTags, PluginTypes, } from "./Plugin";
export type { HostUser, HostServices } from "./ServicesTypes";
export type { CustomSettings, UserSettings } from "./SettingsTypes";
export type { PluginContext, PluginElementWithCtx } from "./ContextTypes";
export type { PluginDefinition, MountFunction } from "./DefinitionsTypes";
export type PluginModule = {
    default: PluginDefinition<PluginTypes>;
};
//# sourceMappingURL=index.d.ts.map