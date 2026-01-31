import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: "automatic" })],
  assetsInclude: ["**/*.lottie"],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "${path
          .join(process.cwd(), "src/styles/_mantine")
          .replace(/\\/g, "/")}" as mantine;`,
      },
    },
  },
});
