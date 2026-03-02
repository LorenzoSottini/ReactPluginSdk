import { PluginTypes } from "@acme/plugin-contracts";

export type TemplateAnswers = {
  pluginName: string;
  description: string;
  pluginType: PluginTypes;
  reactEnabled: boolean;
  reactDependencyMode: "bundled" | "peer";
  hostDomain: string;
  pluginDevPort: number;
};

export type RenderModel = TemplateAnswers & {
  pluginId: string;
  pluginPackageName: string;
  author: string;
};

export type RenderedFile = {
  relativePath: string;
  content: string;
  executable?: boolean;
};

export type TemplateRegistryEntry = Partial<
  Record<
    PluginTypes,
    {
      key: string;
      dirName: string;
    }
  >
>;
