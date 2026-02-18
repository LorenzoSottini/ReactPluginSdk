import type { ComponentType } from "react";
import type {
  ContractVersion,
  PluginContext,
  PluginTypes,
} from "@acme/plugin-contracts";

/** Plugin Definition */
export type PluginDefinition<PT extends PluginTypes = PluginTypes> = {
  /** Tipo del plugin  */
  type: PT;
  /** Id univoco del plugin */
  id: string;
  /** Versione del contratto utilizzato */
  contractVersion: ContractVersion;
  /** Componente da renderizzare nel plugin */
  Root: ComponentType;
  /**
   * Hook opzionale di lifecycle:
   * - viene chiamato quando l'istanza del plugin viene montata nel WebComponent
   * - riceve il ctx host
   * - puo ritornare una funzione di cleanup, eseguita allo smontaggio
   */
  activate?: (ctx: PluginContext<PT>) => void | (() => void);
};

export function definePlugin<PT extends PluginTypes>(
  def: PluginDefinition<PT>,
): PluginDefinition<PT> {
  return def;
}

export { PluginProvider, usePluginContext } from "./plugin-context";
export * from "./hooks";
