import type { PluginMeta } from "@acme/plugin-contracts";

export const META = {
  id: "example-command", // Sarà generato dalla CLI
  name: "Plugin Command",
  description: "Plugin Commandi con React in boundle",
  type: "COMMAND",
} as const satisfies PluginMeta;
