import type { HostServices } from "@acme/plugin-contracts";

// Implementazione host-side service fornita al plugins.
export const HostServiceInstance = {
  toast: {
    show(message: string) {
      console.log(`Toast message from HostService: ${message}`);
    },
  },
} satisfies HostServices;
