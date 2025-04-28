// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig as defineTestConfig } from "vitest/config";

// https://vite.dev/config/
export default defineTestConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});