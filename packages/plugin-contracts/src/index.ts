export type ContractVersion = "1.0";

export type HostUser = {
  id: string;
  displayName: string;
};

export type HostServices = {
  toast: {
    show(message: string): void;
  };
};

export type PluginContext = {
  contractVersion: ContractVersion;
  user: HostUser;
  services: HostServices;
};

export type PluginManifest = {
  id: string;
  name: string;
  version: string;
  contractVersion: ContractVersion;
  entry: string;
  webComponentTag: string;
};

export type PluginElementWithCtx = HTMLElement & {
  ctx?: PluginContext;
};
