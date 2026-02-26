import type { PluginMeta } from "@acme/plugin-contracts";

export const META = {
  id: "react-peer", // Sarà generato dalla CLI
  name: "Plugin React in PeerPlugin React",
  description: "Plugin ROUTE con React che viene fornito dall'host",
  type: "WIDGET_DESKTOP",
} as const satisfies PluginMeta;
