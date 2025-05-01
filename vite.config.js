import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vercel from 'vite-plugin-vercel';
import { resolve } from "path";

// https://vite.dev/config/


export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.

  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react(), tailwindcss(), vercel()],
    build:{
      target: "esnext", // or "es2019",
    },
    resolve: {
      alias: {
        "@app": resolve("src"),
        "@assets": resolve("src/assets"),
        "@components": resolve("src/components"),
        "@header": resolve("src/components/Header"),
        "@footer": resolve("src/components/Footer"),
        "@articles": resolve("src/components/Articles"),
        "@pages": resolve("src/pages"),
        "@api": resolve("src/api"),
        // "@store": resolve("src/store"),
        // "@ui": resolve("src/ui"),
        // "@utils": resolve("src/utils"),
      },
    
    },
    define: {
      __VITE_API_KEY__: JSON.stringify(env.VITE_API_KEY),
    },
  }
})