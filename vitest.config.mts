import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import "@testing-library/jest-dom";


export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    // globals: true,
    // include: ["src/**/*.{test,spec}.ts", "src/**/*.{test,spec}.tsx"],
    // setupFiles: "./vitest.setup.ts", // ✅ این خط مهمه
  },
});
