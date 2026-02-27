import { PLUGIN_TYPES, type CommandPluginTypes } from "@acme/plugin-contracts";

type ConfigWithActivate = { activate?: unknown };
type ConfigWithRoot = { Root?: unknown };

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function validateBaseConfig(
  config: unknown,
): asserts config is Record<string, unknown> {
  assert(
    !!config && typeof config === "object",
    "Invalid config: expected object",
  );
}

export function validateId(config: {
  id: unknown;
}): asserts config is { id: string } {
  assert(
    typeof config.id === "string" && config.id.trim().length > 0,
    "Invalid config: 'id' is required",
  );
}

export function validateKnownPluginType(config: {
  type: unknown;
}): asserts config is { type: keyof typeof PLUGIN_TYPES } {
  assert(
    typeof config.type === "string" && config.type in PLUGIN_TYPES,
    `Invalid config: 'type' must be one of ${Object.keys(PLUGIN_TYPES).join(", ")}`,
  );
}

export function validateRoot(
  config: ConfigWithRoot,
  required: true,
): asserts config is { Root: Function };

export function validateRoot(config: ConfigWithRoot, required: false): void;
export function validateRoot(config: ConfigWithRoot, required: boolean): void {
  if (required) {
    assert(
      typeof config.Root === "function",
      "Invalid config: 'Root' must be a component",
    );
    return;
  }

  assert(
    config.Root === undefined || typeof config.Root === "function",
    "Invalid config: 'Root' must be a component",
  );
}

export function validateActivate(config: ConfigWithActivate): void {
  assert(
    config.activate === undefined || typeof config.activate === "function",
    "Invalid config: 'activate' must be a function",
  );
}

export function validateBaseCommand(config: {
  type: unknown;
  command: { label: unknown };
  execute: unknown;
}): asserts config is {
  type: CommandPluginTypes;
  command: { label: string };
  execute: Function;
} {
  assert(
    config.type === "COMMAND" || config.type === "COMMAND_PROFILATION",
    "Invalid config: 'type' must be COMMAND or COMMAND_PROFILATION",
  );
  assert(
    !!config.command && typeof config.command.label === "string",
    "Invalid config: 'command.label' is required",
  );
  assert(
    typeof config.execute === "function",
    "Invalid config: 'execute' must be a function",
  );
}
