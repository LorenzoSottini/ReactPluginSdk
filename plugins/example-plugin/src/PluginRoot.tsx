import { useServices, useUser, useManifest } from "@acme/plugin-react";
import { useState } from "react";

export function PluginRoot() {
  const services = useServices();
  const manifest = useManifest();
  const user = useUser();

  const [val, setVal] = useState<string>("");

  return (
    <div style={{ padding: 10, border: "1px solid #ccc" }}>
      <h3>Esempio di Plugin</h3>
      <p> Utente from Host: {user.displayName}</p>

      <label>Dettagli del manifest from Host</label>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>id:</strong> {manifest.id}
        </li>
        <li>
          <strong>name:</strong> {manifest.name}
        </li>
        <li>
          <strong>type:</strong> {manifest.type}
        </li>
        <li>
          <strong>contractVersion:</strong> {manifest.contractVersion}
        </li>
        <li>
          <strong>version:</strong> {manifest.version}
        </li>
      </ul>
      <div style={{ display: "flex", gap: "6px" }}>
        <input
          placeholder="Notifica all'host"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        ></input>
        <button
          onClick={() => services.toast.show(`Hello from plugin:${val}`)}
          type="button"
        >
          Send message in console
        </button>
      </div>
    </div>
  );
}
