import type { PluginMeta } from "@acme/plugin-contracts";

export const META = {
  id: "angularjsv1", // Sara generato dalla CLI
  name: "Plugin AngularJS v1",
  description: "Plugin ROUTE con AngularJS",
  type: "ROUTE",
} as const satisfies PluginMeta;
