import { PluginCommandComponent } from "../components/PluginCommandComponent";

const user = { id: "host-user-1", displayName: "Lorenzo" } as const;

export default function CommandPage() {
  return (
    <PluginCommandComponent
      user={user}
      manifestUrl="http://localhost:5177/dist/manifest.json"
    />
  );
}
