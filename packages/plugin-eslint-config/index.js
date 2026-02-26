import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
  // base
  {
    name: "@acme/plugin-eslint-config/base",
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    rules: {
      // regole generali plugin (se ti servono)
      "import/no-named-export": "off",
    },
  },

  // entry contract: src/index.ts SOLO default export
  {
    name: "@acme/plugin-eslint-config/entry",
    files: ["src/index.ts"],
    rules: {
      "import/no-named-export": "error",
    },
  },
];
