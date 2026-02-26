// packages/plugin-contracts/src/definition.ts

import type { PluginMeta, PluginTypes } from "./Plugin";
import { PluginContext } from "./ContextTypes";

/**
 * Handle di mount: l'host lo conserva per fare unmount/cleanup.
 */
type MountHandle = (() => void) | void;

export type MountFunction<PT extends PluginTypes = PluginTypes> = (
  container: HTMLDivElement,
  ctx: PluginContext<PT>,
) => MountHandle;

export type PluginDefinition<PT extends PluginTypes = PluginTypes> =
  PluginMeta & {
    mount?: MountFunction<PT>;
  };
