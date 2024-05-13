import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://migacity.github.io',
    base: '/calcque_webapp',
    build: {
        assets: 'asset'
    },
    integrations: [
        vue(),
        tailwind()
    ],
});
