import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), eslint(), svgr()],
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
