import react from "@astrojs/react";
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'fullstackhero',
    favicon: '/favicon.ico',
    components: {
      Pagination: './src/components/footer/pagination.astro'
    },
    editLink: {
      baseUrl: 'https://github.com/fullstackhero/docs/edit/astro/'
    },
    logo: {
      src: './src/assets/full-stack-hero-logo.png'
    },
    social: {
      github: 'https://github.com/fullstackhero/dotnet-starter-kit',
      linkedin: 'https://www.linkedin.com/in/iammukeshm/',
      youtube: 'https://www.youtube.com/@codewithmukesh',
      twitter: 'https://x.com/iammukeshm'
    },
    customCss: ['./src/styles/tailwind.css', './src/styles/custom.scss'],
    sidebar: [{
      label: 'General',
      collapsed: true,
      autogenerate: {
        directory: '/dotnet-starter-kit/general/',
        collapsed: true
      }
    }, {
      label: 'Web API',
      collapsed: true,
      autogenerate: {
        directory: '/dotnet-starter-kit/webapi/',
        collapsed: true
      }
    }, {
      label: 'Blazor',
      collapsed: true,
      autogenerate: {
        directory: '/dotnet-starter-kit/blazor/',
        collapsed: true
      }
    }, {
      label: 'Aspire',
      collapsed: true,
      autogenerate: {
        directory: '/dotnet-starter-kit/aspire/',
        collapsed: true
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), react(), icon()]
});