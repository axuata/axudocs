import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Axudocs",
  description: "📝 Documentation for Axuata's Packages",
  themeConfig: {
    logo: '/assets/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Libraries',
        items: [
          { text: 'Logica', link: '/libraries/logica/introduction/what-is-logica' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/axuata/axudocs' },
      { icon: 'npm', link: 'https://www.npmjs.com/~axuata' }
    ],

    search: {
      provider: 'local',
    },

    sidebar: {
      '/libraries/logica': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'What is Logica?', link: '/libraries/logica/introduction/what-is-logica' },
            { text: 'Getting Started', link: '/libraries/logica/introduction/getting-started' },
            { text: 'Changelog', link: '/libraries/logica/introduction/changelog' },
          ]
        },
        {
          text: 'Functions',
          collapsed: false,
          items: [
            { text: 'addMessage', link: '/libraries/logica/functions/addMessage' },
            { text: 'addStatus', link: '/libraries/logica/functions/addStatus' },
            { text: 'addStackTrace', link: '/libraries/logica/functions/addStackTrace' },
            { text: 'out', link: '/libraries/logica/functions/out' },
          ]
        },
        {
          text: 'Types',
          collapsed: false,
          items: [
            { text: 'LogLevel', link: '/libraries/logica/types/LogLevel' },
            { text: 'Theme', link: '/libraries/logica/types/Theme' },
          ]
        }
      ]
    },

    footer: {
      message: 'This project is licensed under the MIT License.',
      copyright: '© 2025 - 2025 Axuata',
    },
  }
})
