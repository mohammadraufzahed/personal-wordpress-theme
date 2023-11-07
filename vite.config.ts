import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "dist/scripts"),
    lib: {
      entry: [
        resolve(__dirname, "scripts/main.ts"),
        resolve(__dirname, "scripts/bootstrap.ts"),
      ],
    },
  },
});
