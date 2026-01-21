import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Get the repo name for GitHub Pages base path
// Remove this base config once you have a custom domain set up
export default defineConfig({
    site: 'https://www.timjensen.de',
    vite: {
        plugins: [tailwindcss()],
    },
});
