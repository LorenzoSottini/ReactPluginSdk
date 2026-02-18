import React from "react";
import { useServices, useUser } from "@acme/plugin-react";

export function PluginRoot() {
  const services = useServices();
  const user = useUser();

  return (
    <div style={{ padding: 10, border: "1px solid #ccc" }}>
      <h3>Exempio di Plugin</h3>
      <p>Hello {user.displayName}</p>
      <button onClick={() => services.toast.show("Hello from plugin")}>
        Send toast
      </button>
    </div>
  );
}
