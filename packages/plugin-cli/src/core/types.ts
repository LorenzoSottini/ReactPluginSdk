import type { PluginTypes } from "@acme/plugin-contracts";

export type CliPluginType = Extract<PluginTypes, "ROUTE" | "COMMAND">;

export type CliFlags = {
  dryRun?: boolean;
  force?: boolean;
  install?: boolean;
};

export type CreatePromptAnswers = {
  pluginName: string;
  description: string;
  pluginType: CliPluginType;
  reactEnabled: boolean;
  reactDependencyMode?: ReactDependencyModeType;
  hostDomain: string;
  pluginDevPort: number;
};

export type ReactDependencyModeType = "bundled" | "peer";
export type ScaffoldAnswers = {
  pluginName: string;
  description: string;
  pluginType: CliPluginType;
  reactEnabled: true;
  reactDependencyMode: ReactDependencyModeType;
  hostDomain: string;
  pluginDevPort: number;
  targetPath: string;
};

export type GenerateOptions = {
  dryRun: boolean;
  force: boolean;
};
