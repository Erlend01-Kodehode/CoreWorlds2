import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { default_URL } from "./config.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: default_URL,
});
