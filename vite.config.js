import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(/** @type {import('vite').UserConfig} */ ({
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        sourcemap: false,
        minify: 'esbuild',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    }
}));

