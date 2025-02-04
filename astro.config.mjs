// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://pokedrops.netlify.app/", integrations: [sitemap(), robotsTxt({
        sitemap: ["https://pokedrops.netlify.app/sitemap-index.xml", "https://pokedrops.netlify.app/sitemap-0.xml",],
    }), tailwind(), icon()], adapter: netlify({edgeMiddleware: true}),
});
