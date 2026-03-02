import { renderTemplateProject, type RenderModel } from "plugin-templates";
import { ensureTargetDirectory, writeRenderedFiles } from "./fs";
import type { GenerateOptions, ScaffoldAnswers } from "./types";
import { randomUUID } from "crypto";
import { toKebabCase } from "./normalize";

export function generatePluginScaffold(
  answers: ScaffoldAnswers,
  options: GenerateOptions,
): { files: string[] } {
  const model: RenderModel = {
    pluginId: randomUUID(),
    pluginPackageName: toKebabCase(answers.pluginName),
    author: "SdkCli",
    pluginName: answers.pluginName,
    description: answers.description,
    pluginType: answers.pluginType,
    reactEnabled: answers.reactEnabled,
    reactDependencyMode: answers.reactDependencyMode,
    hostDomain: answers.hostDomain,
    pluginDevPort: answers.pluginDevPort,
  };

  const renderedFiles = renderTemplateProject(model);

  if (!options.dryRun) {
    ensureTargetDirectory(answers.targetPath);
    writeRenderedFiles(answers.targetPath, renderedFiles);
  }

  return {
    files: renderedFiles.map((file) => file.relativePath),
  };
}
