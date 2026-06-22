import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/colegio-da-familia-landing-page/" : "/",
  plugins: [react()],
}));
