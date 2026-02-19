import { useEffect, useRef, useState } from "react";
import "./App.css";
import { HostServiceInstance } from "./Service";
import { clearPluginMount, loadPluginFromManifest } from "./PluginLoader";

const PLUGIN_MANIFEST_URL = "/plugin/plugin.manifest.json";
const PLUGIN_PEER_MANIFEST_URL = "/peer_plugin/plugin.manifest.json";

const user = { id: "host-user-1", displayName: "Lorenzo" };

const PluginExample = (props: { manifestUrl: string }) => {
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
          manifestUrl: props.manifestUrl,
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
  }, [props.manifestUrl]);

  return (
    <div>
      <p>Status: {status}</p>
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      <div ref={hostElementRef} />
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Plugin Host</h1>
      <p className="read-the-docs">Integrazione plugin via dynamic import</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <PluginExample manifestUrl={PLUGIN_MANIFEST_URL} />
        <PluginExample manifestUrl={PLUGIN_PEER_MANIFEST_URL} />
      </div>
    </>
  );
}

export default App;
