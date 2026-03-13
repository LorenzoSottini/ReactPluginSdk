import { FC, useState } from "react";
import { useManifest, useServices, useUser } from "@acme/plugin-react";

export const PluginRoot: FC = () => {
  const services = useServices();
  const manifest = useManifest();
  const user = useUser();

  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 10, border: "1px solid #ccc" }}>
      <h3>{manifest.name}</h3>
      <p>Ciao {user.displayName}, questo plugin utilizza react 18 in Peer.</p>
      <p>
        Il plugin non include React nel bundle (external), quindi React va
        risolto fuori. Se non si configura nulla, prende il React dell’host. Per
        forzare React 18 bisogna dare una risoluzione esplicita:
        <ul>
          <li>
            alias/output CDN nel build del plugin (es. esm.sh/react@18.3.1) (il
            plugin implementa questo)
          </li>
          <li>Oppure import map scoped lato host</li>
        </ul>
      </p>
      <p>
        <p>Pro: bundle piccolo, runtime condiviso/controllabile.</p>
        <p>
          Contro: più fragile, serve orchestrazione precisa della risoluzione
          moduli.
        </p>
      </p>

      <input
        placeholder="Messaggio per l'host"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        onClick={() => services.toast.show(`Messaggio plugin: ${value}`)}
      >
        Invia
      </button>
    </div>
  );
};
