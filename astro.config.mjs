import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'fullstackhero',
    editLink: {
      baseUrl: 'https://github.com/fullstackhero/docs/edit/astro/',
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    customCss: [
      './src/styles/tailwind.css',
      './src/styles/base.css'
    ],
    sidebar: [{
      label: 'Getting Started',
      items: [
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }),
  tailwind(
    {
      applyBaseStyles: false,
    }
  )]
});