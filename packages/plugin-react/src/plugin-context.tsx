import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { PluginContext } from "@acme/plugin-contracts";

const PluginReactContext = createContext<PluginContext | null>(null);

export function PluginProvider(ctx: PluginContext, children: ReactNode) {
  return (
    <PluginReactContext.Provider value={ctx}>
      {children}
    </PluginReactContext.Provider>
  );
}

export function usePluginContext(): PluginContext {
  const ctx = useContext(PluginReactContext);
  if (!ctx) {
    throw new Error("usePluginContext must be used inside <PluginProvider />");
  }
  return ctx;
}
