import { PLUGINS_AVAILABLE } from "@/pluginsList";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "./ui/item";
import { ChevronRightIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "react-router";

export const PluginList = () => {
  const list = Object.entries(PLUGINS_AVAILABLE);
  return (
    <div className="flex flex-col gap-4">
      <h1>Available Plugins</h1>
      <Separator />
      <ul className="flex w-full max-w-md flex-col gap-4">
        {list.map(([key, value]) => {
          return (
            <NavLink to={key}>
              <Item key={key} asChild variant="outline">
                <li>
                  <ItemContent>
                    <ItemTitle>{value.manifestUrl}</ItemTitle>
                    <ItemDescription>...</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <ChevronRightIcon className="size-4" />
                  </ItemActions>
                </li>
              </Item>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
