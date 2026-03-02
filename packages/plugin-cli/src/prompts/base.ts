import * as p from "@clack/prompts";
import type {
  CliPluginType,
  CreatePromptAnswers,
  ReactDependencyModeType,
} from "../core/types";

type BasePromptAnswers = Omit<CreatePromptAnswers, "hostDomain" | "pluginDevPort">;

function isCancel<T>(value: T | symbol): value is symbol {
  return p.isCancel(value);
}

export async function askBasePrompts(defaults?: {
  pluginName?: string;
  description?: string;
}): Promise<BasePromptAnswers> {
  const pluginName = await p.text({
    message: "Nome del plugin",
    placeholder: "my-plugin",
    initialValue: defaults?.pluginName,
    validate(value) {
      if (!value?.trim()) {
        return "Il nome e obbligatorio.";
      }
    },
  });

  if (isCancel(pluginName)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  const description = await p.text({
    message: "Descrizione del plugin",
    placeholder: "Plugin ACME",
    initialValue: defaults?.description,
    validate(value) {
      if (!value?.trim()) {
        return "La descrizione e obbligatoria.";
      }
    },
  });

  if (isCancel(description)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  const pluginType = await p.select<CliPluginType>({
    message: "Tipologia plugin",
    options: [
      { value: "ROUTE", label: "ROUTE" },
      { value: "COMMAND", label: "COMMAND" },
    ],
  });

  if (isCancel(pluginType)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  const reactEnabled = await p.confirm({
    message: "Plugin React?",
    initialValue: true,
  });

  if (isCancel(reactEnabled)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  let reactDependencyMode = undefined;
  if (reactEnabled) {
    reactDependencyMode = await p.select<ReactDependencyModeType>({
      message: "Come vuoi integrare React?",
      options: [
        { value: "bundled", label: "Bundled" },
        { value: "peer", label: "Peer" },
      ],
    });
    if (isCancel(reactDependencyMode)) {
      p.cancel("Operazione annullata.");
      process.exit(0);
    }
  }

  return {
    pluginName,
    description,
    pluginType,
    reactEnabled,
    reactDependencyMode,
  };
}
