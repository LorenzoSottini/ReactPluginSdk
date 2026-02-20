import type { HostServices, HostUser } from "./Services";
export * from "./Services";
import packageJson from "../package.json";

/** Versione del contratto derivata dal package */
export const CONTRACT_VERSION = packageJson.version;
export type ContractVersion = typeof CONTRACT_VERSION;

/** Tipi di plugin supportati */
export const PLUGIN_TYPES = {
  ROUTE: "ROUTE",
  WIDGET: "WIDGET",
  COMMAND: "COMMAND",
} as const;
export type PluginTypes = keyof typeof PLUGIN_TYPES;

/** Mapping dei WebComponent Tag by PluginType */
export const PLUGIN_TAGS_PREFIX = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget",
} as const satisfies Record<PluginTypes, string>;
export type PluginTags = (typeof PLUGIN_TAGS_PREFIX)[PluginTypes];

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

export type PluginContext<PT extends PluginTypes = PluginTypes> = {
  contractVersion: ContractVersion;
  manifest: PluginManifest<PT>;
  user: HostUser;
  services: HostServices;
};

export type PluginElementWithCtx = HTMLElement & {
  ctx: PluginContext;
};
