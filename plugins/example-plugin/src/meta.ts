import type { PluginMeta } from "@acme/plugin-contracts";

export const META = {
  id: "acme.example-plugin",
  name: "Plugin React",
  description: "Plugin ROUTE con React in boundle - 945kb",
  type: "ROUTE",
} as const satisfies PluginMeta;
