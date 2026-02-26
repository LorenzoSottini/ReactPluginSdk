const version = "0.1.0";
const packageJson = {
  version
};
const CONTRACT_VERSION = packageJson.version;
const PLUGIN_TYPES = {
  ROUTE: "ROUTE",
  WIDGET_DESKTOP: "WIDGET_DESKTOP",
  WIDGET_TASK: "WIDGET_TASK",
  COMMAND: "COMMAND",
  COMMAND_PROFILATION: "COMMAND_PROFILATION"
};
const PLUGIN_TAGS_PREFIX = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET_DESKTOP: "plugin-widget",
  WIDGET_TASK: "plugin-widget-task",
  COMMAND_PROFILATION: "plugin-command-profilation"
};
function composeTagName(id, type) {
  return `${PLUGIN_TAGS_PREFIX[type]}-${id}`;
}
export {
  CONTRACT_VERSION,
  PLUGIN_TYPES,
  composeTagName
};
