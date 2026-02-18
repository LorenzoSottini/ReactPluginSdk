import { useEffect, useRef, useState } from "react";
import "./App.css";
import { HostServiceInstance } from "./Service";
import { clearPluginMount, loadPluginFromManifest } from "./PluginLoader";

const PLUGIN_MANIFEST_URL = "/plugin/plugin.manifest.json";

const user = { id: "host-user-1", displayName: "Lorenzo" };

function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let disposed = false;

    async function loadPlugin() {
      try {
        setStatus("loading");
        setError(null);

        if (disposed || !mountRef.current) return;
        await loadPluginFromManifest({
          manifestUrl: PLUGIN_MANIFEST_URL,
          mount: mountRef.current,
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
      if (mountRef.current) clearPluginMount(mountRef.current);
    };
  }, []);

  return (
    <>
      <h1>Plugin Host</h1>
      <p className="read-the-docs">Integrazione plugin via dynamic import</p>
      <p>Status: {status}</p>
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      <div ref={mountRef} />
    </>
  );
}

export default App;
