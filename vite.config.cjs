import { defineConfig } from "vite";
const { resolve } = require('path')

const env = process.env;

env.mode = env.mode || "production";

export default defineConfig({
    root: "./",
    base: env.mode === "production" ? "/examen-renta/" : "/",
    build: {
        outDir: "docs",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        }
    },
    plugins: []
})