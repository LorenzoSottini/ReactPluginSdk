import packageJson from "../package.json";

/** Versione del contratto derivata dal package */
export const CONTRACT_VERSION = packageJson.version;
export type ContractVersion = typeof CONTRACT_VERSION;

/** Tipi di plugin supportati */
export const PLUGIN_TYPES = {
  ROUTE: "ROUTE",
  WIDGET_DESKTOP: "WIDGET_DESKTOP",
  WIDGET_TASK: "WIDGET_TASK",
  COMMAND: "COMMAND",
  COMMAND_PROFILATION: "COMMAND_PROFILATION",
} as const;
export type PluginTypes = keyof typeof PLUGIN_TYPES;

/** Plugin dedicati a renderizzare UI e Logica isolata  */
export type StandardPluginTypes = Extract<
  PluginTypes,
  "ROUTE" | "WIDGET_DESKTOP" | "WIDGET_TASK"
>;

/** Plugin dedicati a fornire Logica interconnessa alla UI dell'host e opzionalmente possono renderizzare propria UI  */
export type CommandPluginTypes = Extract<
  PluginTypes,
  "COMMAND" | "COMMAND_PROFILATION"
>;

/** Mapping dei WebComponent Tag by PluginType */
export const PLUGIN_TAGS_PREFIX = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET_DESKTOP: "plugin-widget",
  WIDGET_TASK: "plugin-widget-task",
  COMMAND_PROFILATION: "plugin-command-profilation",
} as const satisfies Record<PluginTypes, string>;
export type PluginTags = (typeof PLUGIN_TAGS_PREFIX)[PluginTypes];

/** Compone il TagName per il WebComponent */
export function composeTagName<TP extends PluginTypes>(
  id: PluginMeta["id"],
  type: TP,
): PluginManifest<TP>["tagName"] {
  return `${PLUGIN_TAGS_PREFIX[type]}-${id}`;
}

/**
 * Definizione statica del manifest senza le informazioni generate in fase di build
 */
export type PluginMeta = {
  type: PluginTypes;
  /** Alfanumerico generetato dalla CLI */
  id: string;
  name: string;
  description: string;
};

/**
 * Manifest statico del plugin:
 * metadati e entry ESM usati dall'host per discovery e caricamento.
 * Non rappresenta stato runtime del plugin.
 */
export type PluginManifest<PT extends PluginTypes = PluginTypes> =
  PluginMeta & {
    type: PT;
    tagName: `${(typeof PLUGIN_TAGS_PREFIX)[PT]}-${PluginMeta["id"]}`;
    version: string;
    contractVersion: ContractVersion;
    entry: string;
  };
