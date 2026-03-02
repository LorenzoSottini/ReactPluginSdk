import * as p from "@clack/prompts";

type DevPromptAnswers = {
  hostDomain: string;
  pluginDevPort: number;
};

export async function askDevPrompts(): Promise<DevPromptAnswers> {
  const hostDomainInput = await p.text({
    message: "Host domain",
    placeholder: "http://localhost:5173",
    initialValue: "http://localhost:5173",
    validate(input) {
      if (!input?.trim()) {
        return "hostDomain e obbligatorio.";
      }

      try {
        const url = new URL(input);
        if (!url.protocol.startsWith("http")) {
          return "Inserisci un URL http/https valido.";
        }
      } catch {
        return "Inserisci un URL valido.";
      }
    },
  });

  if (p.isCancel(hostDomainInput)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  const pluginDevPortInput = await p.text({
    message: "Dev port",
    placeholder: "5174",
    initialValue: "5174",
    validate(input) {
      if (!input?.trim()) {
        return "pluginDevPort e obbligatorio.";
      }

      const port = Number(input);
      if (!Number.isInteger(port) || port < 1 || port > 65535) {
        return "Inserisci una porta valida (1-65535).";
      }
    },
  });

  if (p.isCancel(pluginDevPortInput)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  return {
    hostDomain: hostDomainInput,
    pluginDevPort: Number(pluginDevPortInput),
  };
}
