import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore"]], //? type of change
    "scope-case": [2, "always", "kebab-case"], //? scop of the change
    "subject-case": [0], //? describe whats going on
  },
};

export default config;
