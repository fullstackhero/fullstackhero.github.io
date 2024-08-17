import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'fullstackhero',
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
      autogenerate: {
        directory: '/dotnet-starter-kit/general/'
      }
    }, {
      label: 'Web API',
      autogenerate: {
        directory: '/dotnet-starter-kit/webapi/'
      }
    }, {
      label: 'Blazor',
      autogenerate: {
        directory: '/dotnet-starter-kit/blazor/'
      }
    }, {
      label: 'Aspire',
      autogenerate: {
        directory: '/dotnet-starter-kit/aspire/'
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), react(), icon()]
});