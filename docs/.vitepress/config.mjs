import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ARM Data Workbench",
  description: "Documentation page for ARM Data Workbench",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/get-started' }
    ],

    sidebar: [
      // {
      //   text: 'Getting Started',
      //   items: [
      //     { text: 'Requirements', link: '/get-started' }
      //   ]
      // },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ARM-Development/ARM-Data-Workbench' }
    ]
  }
})
