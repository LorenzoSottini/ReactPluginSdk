import type { HostServices, HostUser } from "./Services";
export * from "./Services";
/** Versione del contratto derivata dal package */
export declare const CONTRACT_VERSION: string;
export type ContractVersion = typeof CONTRACT_VERSION;
/** Tipi di plugin supportati */
export declare const PLUGIN_TYPES: {
    readonly ROUTE: "ROUTE";
    readonly WIDGET: "WIDGET";
    readonly COMMAND: "COMMAND";
};
export type PluginTypes = keyof typeof PLUGIN_TYPES;
/** Mapping dei WebComponent Tag by PluginType */
export declare const PLUGIN_TAGS: {
    readonly ROUTE: "plugin-route";
    readonly COMMAND: "plugin-command";
    readonly WIDGET: "plugin-widget";
};
export type PluginTags = (typeof PLUGIN_TAGS)[PluginTypes];
/**
 * Manifest statico del plugin:
 * metadati e entry ESM usati dall'host per discovery e caricamento.
 * Non rappresenta stato runtime del plugin.
 */
export type PluginManifest<PT extends PluginTypes = PluginTypes> = {
    type: PT;
    id: string;
    name: string;
    description: string;
    version: string;
    contractVersion: ContractVersion;
    entry: string;
};
/**
 * Definizione statica del manifest senza le informazioni generate in fase di build
 */
export type PluginMeta = Pick<PluginManifest, "id" | "name" | "description" | "type">;
export type PluginContext<PT extends PluginTypes = PluginTypes> = {
    contractVersion: ContractVersion;
    manifest: PluginManifest<PT>;
    user: HostUser;
    services: HostServices;
};
export type PluginElementWithCtx = HTMLElement & {
    ctx: PluginContext;
};
