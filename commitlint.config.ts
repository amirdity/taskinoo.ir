import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore"]],
    "scope-case": [2, "always", "kebab-case"], // برای مثال: page یا user-profile
    "subject-case": [0], // خاموش کردن محدودیت روی subject
  },
};

export default config;
