import type { PluginMeta } from "@acme/plugin-contracts";

export const META = {
  id: "example-plugin", // Sarà generato dalla CLI
  name: "Plugin React",
  description: "Plugin ROUTE con React in boundle - 945kb",
  type: "ROUTE",
} as const satisfies PluginMeta;
