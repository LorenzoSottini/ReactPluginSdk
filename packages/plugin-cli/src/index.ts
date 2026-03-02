#!/usr/bin/env node
import { cac } from "cac";
import * as p from "@clack/prompts";
import { runCreateCommand } from "./commands/create";
import packageJson from "../package.json";

const cli = cac("acme-plugin");

cli
  .usage("<command> [options]")
  .help()
  .version(packageJson.version, "-v, --version");

cli
  .command("create [path]", "Crea un nuovo plugin ACME")
  .option("--dry-run", "Mostra i file senza scriverli")
  .option("--force", "Consente cartelle target non vuote")
  .option("--no-install", "Non installa le dipendenze al termine")
  .example("acme-plugin create")
  .example("acme-plugin create ../../plugins/my-plugin")
  .example("acme-plugin create ./plugins/my-plugin --dry-run")
  .example("acme-plugin create ./plugins/my-plugin --no-install")
  .action(async (path, options) => {
    try {
      await runCreateCommand(path, {
        dryRun: options.dryRun,
        force: options.force,
        install: options.install,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      p.cancel(message);
      process.exit(1);
    }
  });

cli.parse();
