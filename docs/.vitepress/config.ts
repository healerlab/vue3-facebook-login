import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue3-facebook-login/',
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  title: "Vue 3 Facebook login component",
  description: "Powerful, lightweight Facebook login component for Vue 3",
  head: [
    ['link', { rel: 'icon', href: '/vite.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/vite.svg' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/usage-examples' },
      {
        text: '0.1.2',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/healerlab/vue3-facebook-login/releases'
          },
        ]
      }
    ],

    siteTitle: 'Vue3 Facebook Login',


    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Get Started', link: '/usage-examples' },
          { text: 'API', link: '/api' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/healerlab/vue3-facebook-login.git' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 HealerNguyen'
    }
  }
})
