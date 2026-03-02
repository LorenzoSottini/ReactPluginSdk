import type { RenderModel } from "./types";

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

type PackageJson = {
  name: string;
  version: string;
  type: "module";
  author: string;
  description: string;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const BASE_PACKAGE_JSON: PackageJson = {
  name: "",
  version: "1.0.0",
  type: "module",
  description: "",
  author: "",
  scripts: {
    build: "pnpm lint && vite build",
    dev: "vite",
    lint: "eslint .",
    "check:ts": "tsc -p tsconfig.json --noEmit",
  },
  dependencies: {
    "@acme/plugin-contracts": "workspace:",
    "@acme/plugin-react": "workspace:",
  },
  devDependencies: {
    "@acme/plugin-eslint-config": "workspace:",
    "@acme/plugin-tools": "workspace:",
    "@vitejs/plugin-react": "5.1.1",
    typescript: "5.9.3",
    vite: "^7.3.1",
    eslint: "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^8.0.0",
    "@typescript-eslint/parser": "^8.0.0",
    "eslint-plugin-import": "^2.29.0",
  },
};

const REACT_MODE_PARTIALS: Record<
  RenderModel["reactDependencyMode"],
  Pick<PackageJson, "dependencies" | "peerDependencies" | "devDependencies">
> = {
  bundled: {
    dependencies: {
      react: "^19.2.0",
      "react-dom": "^19.2.0",
    },
    devDependencies: {
      "@types/react": "^19.2.7",
      "@types/react-dom": "^19.2.3",
    },
  },
  peer: {
    peerDependencies: {
      react: ">=19.2.0 <20.0.0",
      "react-dom": ">=19.2.0 <20.0.0",
    },
    devDependencies: {
      "@types/react": "^19.2.7",
      "@types/react-dom": "^19.2.3",
      react: ">=19.2.0 <20.0.0",
      "react-dom": ">=19.2.0 <20.0.0",
    },
    dependencies: {},
  },
};

function isPlainObject(value: JsonValue | undefined): value is JsonObject {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function mergeJsonObjects(target: JsonObject, source: JsonObject): JsonObject {
  const result: JsonObject = { ...target };

  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = result[key];

    if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
      result[key] = mergeJsonObjects(targetValue, sourceValue);
      continue;
    }

    result[key] = sourceValue;
  }

  return result;
}

export function buildTemplatePackageJson(model: RenderModel): JsonObject {
  const base = {
    ...BASE_PACKAGE_JSON,
    name: model.pluginPackageName,
    description: model.description,
    author: model.author,
  } satisfies JsonObject;

  const reactMode = REACT_MODE_PARTIALS[model.reactDependencyMode];

  return mergeJsonObjects(base, reactMode);
}

export function renderTemplatePackageJson(model: RenderModel): string {
  const pkg = buildTemplatePackageJson(model);
  return `${JSON.stringify(pkg, null, 2)}\n`;
}
