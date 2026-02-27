import { useEffect, useRef, useState, type FC } from "react";
import { clearPluginMount, loadPluginFromManifest } from "../PluginLoader";
import type {
  CommandContext,
  CommandPluginTypes,
  HostUser,
  PluginContext,
  PluginElementWithCtx,
} from "@acme/plugin-contracts";
import { HostServiceInstance } from "../Service";
import {
  executeRegisteredCommand,
  getCommandDescriptorFromRegistry,
} from "../PluginRegister";
import { Button } from "./ui/button";

type PluginCommandComponentProps = {
  manifestUrl: string;
  user: HostUser;
};

export const PluginCommandComponent: FC<PluginCommandComponentProps> = ({
  manifestUrl,
  user,
}) => {
  const hostElementRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("waiting");
  const [error, setError] = useState<string | null>(null);
  const [pluginEl, setPluginEl] = useState<PluginElementWithCtx | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    let disposed = false;

    async function loadPlugin() {
      try {
        setStatus("loading");
        setError(null);

        if (disposed || !hostElementRef.current) return;
        const loadedPluginEl = await loadPluginFromManifest({
          manifestUrl: manifestUrl,
          hostElement: hostElementRef.current,
          user: user,
          services: HostServiceInstance,
        });
        setPluginEl(loadedPluginEl);
        setStatus("loaded");
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unknown plugin load error";
        setError(message);
        setStatus("error");
      }
    }

    void loadPlugin();

    return () => {
      disposed = true;
      setPluginEl(null);
      if (hostElementRef.current) clearPluginMount(hostElementRef.current);
    };
  }, [manifestUrl, user]);

  const manifest = pluginEl?.ctx.manifest;
  const commandType =
    manifest?.type === "COMMAND" || manifest?.type === "COMMAND_PROFILATION"
      ? manifest.type
      : null;

  const commandDescriptor =
    commandType && manifest
      ? getCommandDescriptorFromRegistry(commandType, manifest.id)
      : undefined;

  const handleCommandExecute = async () => {
    if (!pluginEl || !manifest || !commandType) return;
    const commandContext: CommandContext = {
      source: "host.plugin-command-component",
      routeId: manifestUrl,
    };

    try {
      setIsExecuting(true);
      const result = await executeRegisteredCommand(
        commandType,
        manifest.id,
        pluginEl.ctx as PluginContext<CommandPluginTypes>,
        commandContext,
      );
      if (result.status === "error") {
        setError(result.message ?? `Command ${manifest.id} failed`);
      } else {
        setError(null);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown command execution error";
      setError(message);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div>
      <p>Status: {status}</p>
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      {commandType && commandDescriptor && (
        <Button
          onClick={() => void handleCommandExecute()}
          disabled={isExecuting}
          className="mb-3"
        >
          {isExecuting ? "Executing..." : commandDescriptor.label}
        </Button>
      )}
      <div ref={hostElementRef} />
    </div>
  );
};
