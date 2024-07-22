import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'fullstackhero',
    editLink: {
      baseUrl: 'https://github.com/fullstackhero/docs/edit/astro/'
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    customCss: ['./src/styles/tailwind.css', './src/styles/custom.scss'],
    sidebar: [{
      label: 'General',
      autogenerate: {
        directory: '/dotnet-starter-kit/general/'
      }
    }, {
      label: 'Web API',
      autogenerate: {
        directory: '/dotnet-starter-kit/webapi/'
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});