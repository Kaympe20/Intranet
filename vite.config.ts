import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import lightningcss from 'vite-plugin-lightningcss'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/*',
                    dest: 'assets'
                }
            ]
        }),
        lightningcss({
            browserslist: "last 2 versions",
        }),
    ],
    base: '/',
    build: {
        cssMinify: 'lightningcss',
        cssCodeSplit: true,
        minify: true,
        rollupOptions: {
            // Specify all pages as per https://vite.dev/guide/build#multi-page-app
            input: {
                index: resolve(__dirname, 'index.html'),
                steps: resolve(__dirname, 'steps.html'),
          },
    },

    },
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%')),
        }
    }
})
