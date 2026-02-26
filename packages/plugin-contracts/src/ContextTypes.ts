import { ContractVersion, PluginManifest, PluginTypes } from "./Plugin";
import { HostServices, HostUser } from "./ServicesTypes";

export type PluginContext<PT extends PluginTypes = PluginTypes> = {
  contractVersion: ContractVersion;
  manifest: PluginManifest<PT>;
  user: HostUser;
  services: HostServices;
};

export type PluginElementWithCtx = HTMLElement & {
  ctx: PluginContext;
};
