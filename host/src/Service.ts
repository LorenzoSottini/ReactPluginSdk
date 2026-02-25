import type { HostServices } from "@acme/plugin-contracts";
import { toast } from "sonner";

// Implementazione host-side service fornita al plugins.
export const HostServiceInstance = {
  toast: {
    show(message: string) {
      toast(`Toast message from HostService: ${message}`);
    },
  },
} satisfies HostServices;
