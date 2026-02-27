export const COMMAND_DIALOG_OPEN_EVENT_PREFIX = "command-dialog:open";

export type CommandDialogEventDetail<TPayload = unknown> = {
  pluginId: string;
  payload?: TPayload;
};

export type CommandDialogOpenListener<TPayload = unknown> = (
  event: CustomEvent<CommandDialogEventDetail<TPayload>>,
) => void;

function assertPluginId(pluginId: string): void {
  if (!pluginId?.trim()) {
    throw new Error("pluginId is required to manage command dialog events");
  }
}

export function getCommandDialogOpenEventName(pluginId: string): string {
  assertPluginId(pluginId);
  return `${COMMAND_DIALOG_OPEN_EVENT_PREFIX}:${pluginId}`;
}

function _createCommandDialogOpenEvent<TPayload = unknown>(
  pluginId: string,
  payload?: TPayload,
): CustomEvent<CommandDialogEventDetail<TPayload>> {
  return new CustomEvent(getCommandDialogOpenEventName(pluginId), {
    detail: {
      pluginId,
      payload,
    },
  });
}

export function dispatchCommandDialogOpenEvent<TPayload = unknown>(
  pluginId: string,
  payload?: TPayload,
): boolean {
  return globalThis.dispatchEvent(
    _createCommandDialogOpenEvent(pluginId, payload),
  );
}

export function addCommandDialogOpenListener<TPayload = unknown>(
  pluginId: string,
  listener: CommandDialogOpenListener<TPayload>,
  options?: AddEventListenerOptions,
): void {
  globalThis.addEventListener(
    getCommandDialogOpenEventName(pluginId),
    listener as EventListener,
    options,
  );
}

export function removeCommandDialogOpenListener<TPayload = unknown>(
  pluginId: string,
  listener: CommandDialogOpenListener<TPayload>,
  options?: AddEventListenerOptions,
): void {
  globalThis.removeEventListener(
    getCommandDialogOpenEventName(pluginId),
    listener as EventListener,
    options,
  );
}
