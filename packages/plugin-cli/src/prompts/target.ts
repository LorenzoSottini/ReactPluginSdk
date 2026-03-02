import * as p from "@clack/prompts";

export async function askTargetPath(pluginName: string): Promise<string> {
  const value = await p.text({
    message: "Percorso di destinazione",
    placeholder: `../../plugins/${pluginName}`,
    initialValue: `../../plugins/${pluginName}`,
    validate(input) {
      if (!input?.trim()) {
        return "Il percorso e obbligatorio.";
      }
    },
  });

  if (p.isCancel(value)) {
    p.cancel("Operazione annullata.");
    process.exit(0);
  }

  return value;
}
