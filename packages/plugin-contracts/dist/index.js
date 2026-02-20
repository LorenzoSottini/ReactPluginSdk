const version = "0.1.0";
const packageJson = {
  version
};
const CONTRACT_VERSION = packageJson.version;
const PLUGIN_TYPES = {
  ROUTE: "ROUTE",
  WIDGET: "WIDGET",
  COMMAND: "COMMAND"
};
const PLUGIN_TAGS_PREFIX = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget"
};
export {
  CONTRACT_VERSION,
  PLUGIN_TAGS_PREFIX,
  PLUGIN_TYPES
};
