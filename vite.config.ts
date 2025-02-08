import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import lightningcss from 'vite-plugin-lightningcss'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

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
    },
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%'))
        }
    }
})
