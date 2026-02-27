import { FC } from "react";
import { CommandDialogRoot, useManifest, useUser } from "@acme/plugin-react";
import { META } from "./meta";

export const PluginRoot: FC = () => {
  const manifest = useManifest();
  const user = useUser();

  return (
    <CommandDialogRoot pluginId={META.id} title={manifest.name}>
      <p>
        Hello {user.displayName}, this dialog is rendered by the command plugin
        UI.
      </p>
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
    </CommandDialogRoot>
  );
};
