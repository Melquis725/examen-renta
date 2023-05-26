import { defineConfig } from "vite";
const { resolve } = require('path')

const env = process.env;

console.log('Environment: ', env.mode);

export default defineConfig({
    root: "./",
    base: env.mode === "production" ? "/app/" : "/",
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