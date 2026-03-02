import { resolve } from "node:path";
import type { CliFlags, CreatePromptAnswers, ScaffoldAnswers } from "./types";

export function toKebabCase(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function normalizeScaffoldAnswers(
  input: CreatePromptAnswers,
  targetPath: string,
  _flags: CliFlags,
): ScaffoldAnswers {
  const pluginName = input.pluginName.trim();

  return {
    pluginName,
    description: input.description.trim(),
    pluginType: input.pluginType,
    reactEnabled: true,
    reactDependencyMode: input.reactDependencyMode ?? "bundled",
    hostDomain: input.hostDomain,
    pluginDevPort: input.pluginDevPort,
    targetPath: resolve(targetPath),
  };
}
