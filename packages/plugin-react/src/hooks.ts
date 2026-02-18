import { usePluginContext } from "./plugin-context";

export function useServices() {
  return usePluginContext().services;
}

export function useUser() {
  return usePluginContext().user;
}
