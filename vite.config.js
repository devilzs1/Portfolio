import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: "#8936FF",
        background_color: "#19bbf5",
        icons: [
          {
            purpose: "maskable",
            src: "/icon512_maskable.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            purpose: "any",
            src: "/icon512_rounded.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        orientation: "any",
        display: "standalone",
        lang: "en-US",
        name: "Class-XII Physics",
        short_name: "Physics",
        scope: "/",
        start_url: "/",
      },
    }),
  ],
});
