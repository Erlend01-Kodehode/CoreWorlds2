import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { base_url } from "../GameProjects/multiplayerGameCollection/FrontEnd/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base_url,
});
