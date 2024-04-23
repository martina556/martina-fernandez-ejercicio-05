import { resolve } from "node:path";

// vite.config.js
export default {
  server: {
    port: 5173,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        mario: resolve("pages/mario.html"),
        mortal: resolve("pages/mortal.html"),
        index: resolve("index.html"),
      },
    },
  },
};
