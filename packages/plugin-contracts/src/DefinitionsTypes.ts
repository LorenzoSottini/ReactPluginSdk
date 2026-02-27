import type {
  CommandPluginTypes,
  PluginMeta,
  PluginTypes,
  StandardPluginTypes,
} from "./Plugin";
import { PluginContext } from "./ContextTypes";
import { CommandDescriptor, CommandExecuteFor } from "./CommandTypes";

/**
 * Handle di mount: l'host lo conserva per fare unmount/cleanup.
 */
type MountHandle = (() => void) | void;

export type MountFunction<PT extends PluginTypes = PluginTypes> = (
  container: HTMLDivElement,
  ctx: PluginContext<PT>,
) => MountHandle;

export type StandardPluginDefinition<
  PT extends StandardPluginTypes = StandardPluginTypes,
> = PluginMeta & {
  type: PT;
  mount: MountFunction<PT>;
};

export type CommandPluginDefinition<
  PT extends CommandPluginTypes = CommandPluginTypes,
> = PluginMeta & {
  type: PT;
  command: CommandDescriptor<PT>;
  execute: CommandExecuteFor<PT>;
  mount?: MountFunction<PT>;
};

export type PluginDefinition<PT extends PluginTypes = PluginTypes> =
  PT extends CommandPluginTypes
    ? CommandPluginDefinition<Extract<PT, CommandPluginTypes>>
    : StandardPluginDefinition<Extract<PT, StandardPluginTypes>>;
