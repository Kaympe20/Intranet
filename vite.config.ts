import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import cssnano from 'cssnano';
import discardUnused from 'postcss-discard-unused';
import colormin from 'postcss-colormin';
import discardDuplicates from 'postcss-discard-duplicates';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                cssnano({
                    plugins: [
                        discardUnused,
                        colormin,
                        discardDuplicates
                    ]
                })
            ]
        }
    },
    plugins: [
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/*',
                    dest: 'assets'
                }
            ]
        })
    ],
    base: '/',
})
