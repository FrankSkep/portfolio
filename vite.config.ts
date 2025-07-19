import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
    plugins: [
        tailwindcss(), 
        sveltekit(),
        // Multiple compression
        compression({
            algorithms: ['gzip', 'brotliCompress'],
            include: /\.(js|css|html|svg)$/,
            threshold: 1024
        })
    ],
    build: {
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('svelte') || id.includes('@sveltejs')) {
                            return 'vendor-svelte';
                        }
                        if (id.includes('@iconify')) {
                            return 'vendor-icons';
                        }
                        return 'vendor';
                    }
                }
            }
        },
        target: 'esnext',
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
        chunkSizeWarningLimit: 500
    },
    esbuild: {
        drop: ['console', 'debugger'],
        legalComments: 'none'
    }
});