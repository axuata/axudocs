import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Axudocs",
  description: "📝 Documentation for Axuata's Libraries",
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
          text: '👋 Introduction',
          collapsed: false,
          items: [
            { text: 'What is Logica?', link: '/libraries/logica/introduction/what-is-logica' },
            { text: 'Getting Started', link: '/libraries/logica/introduction/getting-started' },
            { text: 'Changelog', link: '/libraries/logica/introduction/changelog' },
          ]
        },
        {
          text: '🛠️ Functions',
          collapsed: false,
          items: [
            {
              text: 'Logger Class',
              items: [
                { text: 'addMessage', link: '/libraries/logica/functions/Logger/addMessage' },
                { text: 'addStatus', link: '/libraries/logica/functions/Logger/addStatus' },
                { text: 'addStackTrace', link: '/libraries/logica/functions/Logger/addStackTrace' },
                { text: 'addTimestamp', link: '/libraries/logica/functions/Logger/addTimestamp' },
                { text: 'addAffix', link: '/libraries/logica/functions/Logger/addAffix' },
                { text: 'addEnvironment', link: '/libraries/logica/functions/Logger/addEnvironment' },
                { text: 'addProgressBar', link: '/libraries/logica/functions/Logger/addProgressBar' },
                { text: 'addIndentation', link: '/libraries/logica/functions/Logger/addIndentation' },
                { text: 'out', link: '/libraries/logica/functions/out' },
              ]
            },
            {
              text: 'Utils Class',
              items: [
                { text: 'startGroup', link: '/libraries/logica/functions/Utils/startGroup' },
                { text: 'endGroup', link: '/libraries/logica/functions/Utils/endGroup' },
              ]
            },

          ]
        },
        {
          text: '🏷️ Types',
          collapsed: false,
          items: [
            { text: 'LogLevel', link: '/logica/logica/types/LogLevel' },
            { text: 'Theme', link: '/logica/logica/types/Theme' },
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
