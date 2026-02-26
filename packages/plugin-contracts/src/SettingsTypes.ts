export type SettingsType = "string" | "number" | "boolean" | "date";

export type Setting = {
  name: string;
  description: string;
  defaultValue: string;
  type: SettingsType;
};

export type CustomSettings = Record<string, Setting>;

export type UserSettings = Record<string, Setting>;
