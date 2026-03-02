import { join } from "node:path";
import type { RenderModel, TemplateRegistryEntry } from "./types";

export const REACT_TEMPLATE_REGISTRY: TemplateRegistryEntry = {
  ROUTE: {
    key: "react-route",
    dirName: "react/route",
  },
  COMMAND: {
    key: "react-command",
    dirName: "react/command",
  },
};

type GetTemplateDirectoryParams = Pick<
  RenderModel,
  "pluginType" | "reactEnabled"
> & {
  templatesRoot: string;
};
export function getTemplateDirectory({
  pluginType,
  reactEnabled,
  templatesRoot,
}: GetTemplateDirectoryParams): string {
  if (!reactEnabled) {
    throw new Error("Template non React non ancora supportati.");
  }

  const entry = REACT_TEMPLATE_REGISTRY[pluginType];
  if (!entry) {
    throw new Error(`Plugin type non supportato dai template React: ${pluginType}`);
  }

  return join(templatesRoot, entry.dirName);
}
