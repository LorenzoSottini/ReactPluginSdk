import { basename, resolve } from "node:path";
import * as p from "@clack/prompts";
import color from "picocolors";
import { generatePluginScaffold } from "../core/generate";
import { installPluginDependencies } from "../core/install";
import { normalizeScaffoldAnswers } from "../core/normalize";
import {
  validateScaffoldAnswers,
  validateTargetDirectory,
} from "../core/validate";
import { askBasePrompts } from "../prompts/base";
import type { CliFlags } from "../core/types";
import { LOGO } from "../core/logo";
import { askTargetPath } from "../prompts/target";
import { askDevPrompts } from "../prompts/dev";

export async function runCreateCommand(
  inputPath: string | undefined,
  flags: CliFlags,
): Promise<void> {
  p.intro(color.bgCyan(color.black(" acme-plugin create ")));

  console.log(LOGO);

  const answers = await askBasePrompts(
    inputPath ? { pluginName: basename(inputPath) } : undefined,
  );
  const devAnswers = await askDevPrompts();

  const fullAnswers = {
    ...answers,
    ...devAnswers,
  };

  validateScaffoldAnswers(fullAnswers);

  const destination = inputPath
    ? resolve(inputPath)
    : await askTargetPath(fullAnswers.pluginName);

  const normalized = normalizeScaffoldAnswers(fullAnswers, destination, flags);

  validateTargetDirectory(normalized.targetPath, { force: !!flags.force });

  const result = generatePluginScaffold(normalized, {
    dryRun: !!flags.dryRun,
    force: !!flags.force,
  });

  if (flags.dryRun) {
    p.note(
      result.files.join("\n"),
      `Dry-run: file generabili in ${normalized.targetPath}`,
    );
  } else {
    if (flags.install !== false) {
      p.log.step(
        `Installazione dipendenze in corso: ${normalized.targetPath}`,
      );
      await installPluginDependencies(normalized.targetPath);
    } else {
      p.log.info("Installazione dipendenze saltata (--no-install).");
    }

    p.note(
      result.files.join("\n"),
      `File generati in ${normalized.targetPath}`,
    );
  }

  p.outro("Completato.");
}
