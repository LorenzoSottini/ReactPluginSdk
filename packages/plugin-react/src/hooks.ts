import { usePluginContext } from "./plugin-context";

export function useServices() {
  return usePluginContext().services;
}

export function useUser() {
  return usePluginContext().user;
}

export function useManifest() {
  return usePluginContext().manifest;
}
