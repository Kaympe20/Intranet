import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import cssnano from 'cssnano';
import discardUnused from 'postcss-discard-unused';
import colormin from 'postcss-colormin';
import discardDuplicates from 'postcss-discard-duplicates';

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
    ],
    base: '/Intranet/',
})