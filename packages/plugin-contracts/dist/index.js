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
const COMMAND_DIALOG_OPEN_EVENT_PREFIX = "command-dialog:open";
function assertPluginId(pluginId) {
  if (!pluginId?.trim()) {
    throw new Error("pluginId is required to manage command dialog events");
  }
}
function getCommandDialogOpenEventName(pluginId) {
  assertPluginId(pluginId);
  return `${COMMAND_DIALOG_OPEN_EVENT_PREFIX}:${pluginId}`;
}
function _createCommandDialogOpenEvent(pluginId, payload) {
  return new CustomEvent(getCommandDialogOpenEventName(pluginId), {
    detail: {
      pluginId,
      payload
    }
  });
}
function dispatchCommandDialogOpenEvent(pluginId, payload) {
  return globalThis.dispatchEvent(
    _createCommandDialogOpenEvent(pluginId, payload)
  );
}
function addCommandDialogOpenListener(pluginId, listener, options) {
  globalThis.addEventListener(
    getCommandDialogOpenEventName(pluginId),
    listener,
    options
  );
}
function removeCommandDialogOpenListener(pluginId, listener, options) {
  globalThis.removeEventListener(
    getCommandDialogOpenEventName(pluginId),
    listener,
    options
  );
}
export {
  CONTRACT_VERSION,
  PLUGIN_TYPES,
  addCommandDialogOpenListener,
  composeTagName,
  dispatchCommandDialogOpenEvent,
  getCommandDialogOpenEventName,
  removeCommandDialogOpenListener
};
