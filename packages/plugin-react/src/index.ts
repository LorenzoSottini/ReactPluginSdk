import type { ComponentType } from "react";
import type { ContractVersion, PluginContext } from "@acme/plugin-contracts";

export type PluginDefinition = {
  id: string;
  contractVersion: ContractVersion;
  Root: ComponentType;
  activate?: (ctx: PluginContext) => void | (() => void);
};

export function definePlugin(def: PluginDefinition): PluginDefinition {
  return def;
}

export { PluginProvider, usePluginContext } from "./plugin-context";
export { useServices, useUser } from "./hooks";
