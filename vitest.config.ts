import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // فعال کردن توابع گلوبال مانند `describe` و `it`
    environment: "jsdom", // شبیه‌سازی محیط مرورگر (برای تست‌های React)
    include: ["src/**/*.{test,spec}.ts", "src/**/*.{test,spec}.tsx"], // مشخص کردن مسیر فایل‌های تست
  },
});
