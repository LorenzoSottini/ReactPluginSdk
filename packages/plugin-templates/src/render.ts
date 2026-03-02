import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ejs from "ejs";
import { renderTemplatePackageJson } from "./package-json";
import { getTemplateDirectory } from "./registry";
import type { RenderModel, RenderedFile } from "./types";
import { assertInsideRoot, stripEjsExtension, toPortablePath } from "./utils";

function collectTemplateFiles(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectTemplateFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".ejs")) {
      files.push(fullPath);
    }
  }

  return files;
}

export function renderTemplateProject(model: RenderModel): RenderedFile[] {
  const moduleDir = dirname(fileURLToPath(import.meta.url));
  const templatesRoot = resolve(moduleDir, "../templates");
  const templateDir = getTemplateDirectory({
    templatesRoot,
    pluginType: model.pluginType,
    reactEnabled: model.reactEnabled,
  });
  const absDir = resolve(templateDir);

  const sourceFiles = collectTemplateFiles(absDir);
  const renderedFiles = sourceFiles
    .filter((sourceFile) => !sourceFile.endsWith("package.json.ejs"))
    .map((sourceFile) => {
      assertInsideRoot(absDir, sourceFile);

      const template = readFileSync(sourceFile, "utf8");
      const rendered = ejs.render(template, model, { async: false });

      const rel = toPortablePath(relative(absDir, sourceFile));

      return {
        relativePath: stripEjsExtension(rel),
        content: rendered,
      } satisfies RenderedFile;
    });

  renderedFiles.push(
    {
      relativePath: "package.json",
      content: renderTemplatePackageJson(model),
    },
    {
      relativePath: ".gitignore",
      content: `node_modules/`,
    },
  );

  return renderedFiles.sort((a, b) =>
    a.relativePath.localeCompare(b.relativePath),
  );
}
