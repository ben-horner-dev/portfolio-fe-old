module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
        files: ["*.svelte"],
        parser: "svelte-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
        }
    }
],
  settings: {
    "svelte/typescript": require("typescript"),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    "svelte/ignore-styles": () => true,
  },
  plugins: ["svelte", "@typescript-eslint"],
  ignorePatterns: ["node_modules"],
};
