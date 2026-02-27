import { createBrowserRouter, useParams } from "react-router";
import App from "./App";
import { PluginList } from "./components/PluginList";
import { PluginComponent } from "./components/PluginComponent";
import CommandPage from "./Pages/Command";
import { PLUGINS_AVAILABLE } from "./pluginsList";

const user = { id: "host-user-1", displayName: "Lorenzo" };

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: PluginList },
      {
        path: "commands",
        Component: CommandPage,
      },
      {
        path: ":pluginId",
        Component: () => {
          const params = useParams();
          const { pluginId } = params;
          const manifestUrl =
            pluginId && Object.keys(PLUGINS_AVAILABLE).includes(pluginId)
              ? PLUGINS_AVAILABLE[pluginId as keyof typeof PLUGINS_AVAILABLE]
                  .manifestUrl
              : null;
          if (!manifestUrl) {
            return <>Plugin not found for route {pluginId}</>;
          }
          return <PluginComponent user={user} manifestUrl={manifestUrl} />;
        },
      },
    ],
  },
]);

export default router;
