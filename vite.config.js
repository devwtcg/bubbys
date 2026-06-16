import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        menu: resolve(__dirname, "menu/index.html"),
        catering: resolve(__dirname, "catering/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        landing: resolve(__dirname, "landing/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
        recipes: resolve(__dirname, "blog/category/recipes/index.html"),
        news: resolve(__dirname, "blog/category/news/index.html"),
      },
    },
  },
});
