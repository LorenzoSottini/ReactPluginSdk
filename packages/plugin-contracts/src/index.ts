import { PluginDefinition } from "./DefinitionsTypes";
import { PluginTypes } from "./Plugin";

export { CONTRACT_VERSION, PLUGIN_TYPES, composeTagName } from "./Plugin";

export type {
  PluginManifest,
  PluginMeta,
  PluginTags,
  PluginTypes,
  StandardPluginTypes,
  CommandPluginTypes,
} from "./Plugin";

export type { HostUser, HostServices } from "./ServicesTypes";

export type { CustomSettings, UserSettings } from "./SettingsTypes";

export type { PluginContext, PluginElementWithCtx } from "./ContextTypes";

export type {
  PluginDefinition,
  MountFunction,
  StandardPluginDefinition,
  CommandPluginDefinition,
} from "./DefinitionsTypes";

export type {
  CommandContext,
  CommandResult,
  CommandDescriptor,
  CommandExecuteFor,
} from "./CommandTypes";

export {
  getCommandDialogOpenEventName,
  dispatchCommandDialogOpenEvent,
  addCommandDialogOpenListener,
  removeCommandDialogOpenListener,
} from "./CommandDialogEventsTypes";

export type {
  CommandDialogEventDetail,
  CommandDialogOpenListener,
} from "./CommandDialogEventsTypes";

export type PluginModule = {
  default: PluginDefinition<PluginTypes>;
};
