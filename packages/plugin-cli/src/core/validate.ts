import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { ScaffoldValidationError } from "./errors";

export function validateScaffoldAnswers(answers: {
  pluginName: string;
  description: string;
  reactEnabled: boolean;
  hostDomain: string;
  pluginDevPort: number;
}): void {
  if (!answers.pluginName.trim()) {
    throw new ScaffoldValidationError("Il nome plugin e obbligatorio.");
  }

  if (!answers.description.trim()) {
    throw new ScaffoldValidationError("La descrizione e obbligatoria.");
  }

  if (!answers.reactEnabled) {
    throw new ScaffoldValidationError(
      "Plugin React = no non e ancora supportato",
    );
  }

  try {
    const url = new URL(answers.hostDomain);
    if (!url.protocol.startsWith("http")) {
      throw new Error("protocol");
    }
  } catch {
    throw new ScaffoldValidationError("hostDomain non valido.");
  }

  if (
    !Number.isInteger(answers.pluginDevPort) ||
    answers.pluginDevPort < 1 ||
    answers.pluginDevPort > 65535
  ) {
    throw new ScaffoldValidationError(
      "pluginDevPort deve essere tra 1 e 65535.",
    );
  }
}

export function validateTargetDirectory(
  targetPath: string,
  options: { force: boolean },
): void {
  const absolute = resolve(targetPath);

  if (!existsSync(absolute)) {
    return;
  }

  const entries = readdirSync(absolute);
  if (entries.length > 0 && !options.force) {
    throw new ScaffoldValidationError(
      `La cartella target non e vuota: ${absolute}. Usa --force per continuare.`,
    );
  }
}
