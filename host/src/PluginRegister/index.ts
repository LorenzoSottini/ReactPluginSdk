export { registerPluginWebComponent, PLUGIN_ID_ATTR } from "./RegisterPlugin";

export {
  getGlobalPluginRegistry,
  setPluginInTypeRegistry,
  getPluginFromRegistry,
  getCommandDescriptorFromRegistry,
  executeRegisteredCommand,
} from "./PluginRegistryService";

export type { PluginRegistry, RegisteredPlugin } from "./PluginRegistryService";
