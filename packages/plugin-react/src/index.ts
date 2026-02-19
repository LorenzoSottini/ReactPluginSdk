import type { ComponentType } from "react";
import type {
  ContractVersion,
  PluginContext,
  PluginTypes,
} from "@acme/plugin-contracts";
import { PLUGIN_TYPES } from "@acme/plugin-contracts";

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

/** Helper di definizione e Validazione strutturale del plugin */
export function definePlugin<PT extends PluginTypes>(
  def: PluginDefinition<PT>,
): PluginDefinition<PT> {
  if (!def || typeof def !== "object") {
    throw new Error(
      "[definePlugin] Invalid plugin definition: expected object",
    );
  }

  if (typeof def.id !== "string" || def.id.trim().length === 0) {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'id' is required",
    );
  }

  if (typeof def.type !== "string" || !(def.type in PLUGIN_TYPES)) {
    throw new Error(
      `[definePlugin] Invalid plugin definition: 'type' must be one of ${Object.keys(
        PLUGIN_TYPES,
      ).join(", ")}`,
    );
  }

  if (
    typeof def.contractVersion !== "string" ||
    def.contractVersion.trim().length === 0
  ) {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'contractVersion' is required",
    );
  }

  if (typeof def.Root !== "function") {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'Root' must be a component",
    );
  }

  if (def.activate !== undefined && typeof def.activate !== "function") {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'activate' must be a function",
    );
  }

  return def;
}

export { PluginProvider, usePluginContext } from "./plugin-context";
export * from "./hooks";
