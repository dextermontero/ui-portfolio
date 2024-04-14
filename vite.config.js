import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        react()
    ],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    preview: {
        port: 3000,
        strictPort: true,
    },
    server: {
        watch: {
            usePolling: true
        },
        port: 3000,
        strictPort: true,
        host: true,
        origin: "http://localhost:3000",
    },
})
