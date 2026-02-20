export type HostUser = {
    id: string;
    displayName: string;
};
export type HostServices = {
    toast: {
        show(message: string): void;
    };
};
