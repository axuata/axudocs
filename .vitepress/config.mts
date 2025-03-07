import { defineConfig } from 'vitepress';

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
        text: 'Packages',
        items: [
          { text: 'Logica', link: '/packages/logica/introduction/what-is-logica' }
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
      '/packages/logica': [
        {
          text: '👋 Introduction',
          collapsed: false,
          items: [
            { text: 'What is Logica?', link: '/packages/logica/introduction/what-is-logica' },
            { text: 'Getting Started', link: '/packages/logica/introduction/getting-started' },
            { text: 'Changelog', link: '/packages/logica/introduction/changelog' },
          ]
        },
        {
          text: '🛠️ Functions',
          collapsed: false,
          items: [
            {
              text: 'Logger Class',
              items: [
                { text: 'addMessage', link: '/packages/logica/functions/Logger/addMessage' },
                { text: 'addStatus', link: '/packages/logica/functions/Logger/addStatus' },
                { text: 'addStackTrace', link: '/packages/logica/functions/Logger/addStackTrace' },
                { text: 'addTimestamp', link: '/packages/logica/functions/Logger/addTimestamp' },
                { text: 'addAffix', link: '/packages/logica/functions/Logger/addAffix' },
                { text: 'addEnvironment', link: '/packages/logica/functions/Logger/addEnvironment' },
                { text: 'addProgressBar', link: '/packages/logica/functions/Logger/addProgressBar' },
                { text: 'addIndentation', link: '/packages/logica/functions/Logger/addIndentation' },
                { text: 'addDivider', link: '/packages/logica/functions/Logger/addDivider' },
                { text: 'out', link: '/packages/logica/functions/Logger/out' },
              ]
            },
            {
              text: 'Utils Class',
              items: [
                { text: 'startGroup', link: '/packages/logica/functions/Utils/startGroup' },
                { text: 'startGroupCollapsed', link: '/packages/logica/functions/Utils/startGroupCollapsed' },
                { text: 'endGroup', link: '/packages/logica/functions/Utils/endGroup' },
              ]
            },

          ]
        },
        {
          text: '🏷️ Types',
          collapsed: false,
          items: [
            { text: 'LogLevel', link: '/packages/logica/types/LogLevel' },
            { text: 'Theme', link: '/packages/logica/types/Theme' },
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
