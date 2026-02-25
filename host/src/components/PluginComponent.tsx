import { useEffect, useRef, useState, type FC } from "react";
import { clearPluginMount, loadPluginFromManifest } from "../PluginLoader";
import type { HostUser } from "@acme/plugin-contracts";
import { HostServiceInstance } from "../Service";

type PluginComponentProps = {
  manifestUrl: string;
  user: HostUser;
};
export const PluginComponent: FC<PluginComponentProps> = ({ manifestUrl, user }) => {
  const hostElementRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("waiting");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let disposed = false;

    async function loadPlugin() {
      try {
        setStatus("loading");
        setError(null);

        if (disposed || !hostElementRef.current) return;
        await loadPluginFromManifest({
          manifestUrl: manifestUrl,
          mount: hostElementRef.current,
          user: user,
          services: HostServiceInstance,
        });
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
      if (hostElementRef.current) clearPluginMount(hostElementRef.current);
    };
  }, [manifestUrl]);

  return (
    <div>
      <p>Status: {status}</p>
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      <div ref={hostElementRef} />
    </div>
  );
};
