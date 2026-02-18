import { useServices, useUser } from "@acme/plugin-react";
import { useState } from "react";

export function PluginRoot() {
  const services = useServices();
  const user = useUser();

  const [val, setVal] = useState<string>("");

  return (
    <div style={{ padding: 10, border: "1px solid #ccc" }}>
      <h3>Esempio di Plugin</h3>
      <p>Hello {user.displayName}</p>
      <div>
        <input value={val} onChange={(e) => setVal(e.target.value)}></input>
        <button
          onClick={() => services.toast.show(`Hello from plugin:${val}`)}
          type="button"
        >
          Send message
        </button>
      </div>
    </div>
  );
}
