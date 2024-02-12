import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint"

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), eslint()],
    // server: {
    //   watch: {
    //     usePolling: true,
    //   },
    // },
    test: {
      global: true,
      environment: "jsdom",
      setupFiles: "./client/src/components/__tests__/setupTest.js",
    },
  };
});
