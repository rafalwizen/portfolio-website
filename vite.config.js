// @ts-nocheck
import path from "path";
import {fileURLToPath} from "url";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({mode}) => {
    // eslint-disable-next-line no-undef
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [react()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        define: {
            'import.meta.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(env.REACT_APP_EMAILJS_SERVICE_ID),
            'import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(env.REACT_APP_EMAILJS_TEMPLATE_ID),
            'import.meta.env.REACT_APP_EMAILJS_USER_ID': JSON.stringify(env.REACT_APP_EMAILJS_USER_ID),
        },
        server: {
            port: 3000,
        },
        build: {
            outDir: 'build',
        },
    }
})

