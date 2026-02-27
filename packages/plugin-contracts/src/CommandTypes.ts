import { PluginContext } from "./ContextTypes";
import { CommandPluginTypes } from "./Plugin";

/** Command */
export type CommandContext = {
  /** Identificativo della route/pagina host da cui parte il comando. */
  routeId?: string;
  /** Identificativo dell'entita target su cui il comando opera. */
  entityId?: string;
  /** Elenco degli identificativi selezionati, utile per azioni bulk. */
  selection?: string[];
  /** Payload libero host-defined con dati aggiuntivi per l'esecuzione. */
  payload?: unknown;
  /** Origine dell'invocazione (es. toolbar, context-menu, shortcut). */
  source?: string;
};

export type CommandResult = {
  status: "ok" | "error" | "cancelled";
  message?: string;
  code?: string;
  data?: unknown;
};

export type CommandDescriptor<
  TP extends CommandPluginTypes = CommandPluginTypes,
> = {
  label: string;
  icon?: string;
  order?: number;
  when?: (
    commandContext: CommandContext,
    pluginContext: PluginContext<TP>,
  ) => boolean;
  disabled?: (
    commandContext: CommandContext,
    pluginContext: PluginContext<TP>,
  ) => boolean;
};

export type CommandExecuteFor<
  TP extends CommandPluginTypes = CommandPluginTypes,
> = (
  pluginContext: PluginContext<TP>,
  commandContext: CommandContext,
) => Promise<CommandResult>;
