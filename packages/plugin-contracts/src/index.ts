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
export const PLUGIN_TAGS = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget",
} as const satisfies Record<PluginTypes, string>;
export type PluginTags = (typeof PLUGIN_TAGS)[PluginTypes];

/** Manifest comune a tutti i plugin */
export type PluginManifest<PT extends PluginTypes = PluginTypes> = {
  type: PT;
  id: string;
  name: string;
  version: string;
  contractVersion: ContractVersion;
  entry: string;
};

export type PluginContext = {
  contractVersion: ContractVersion;
  user: HostUser;
  services: HostServices;
};

export type PluginElementWithCtx = HTMLElement & {
  ctx: PluginContext;
};
