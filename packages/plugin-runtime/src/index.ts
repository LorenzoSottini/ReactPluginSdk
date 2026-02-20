export {
  registerReactPluginWebComponent,
} from "./RegisterReactPlugin";
export { registerPluginWebComponent, PLUGIN_ID_ATTR } from "./RegisterPlugin";

export {
  getGlobalPluginRegistry,
  setPluginInTypeRegistry,
  getPluginFromRegistry,
} from "./PluginRegistry";
export type { PluginRegistry, RegisteredPlugin } from "./PluginRegistry";
