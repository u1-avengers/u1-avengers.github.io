const { description } = require('../../package')
var getChildren = require('./childscript');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'U1S1G2 a.k.a Avengers Group',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  dest: 'docs',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/ico.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/ico.png' }],
    ['link', { rel: 'mask-icon', href: '/ico.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ico.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    searchPlaceholder: 'Tìm kiếm',
    repo: '',
    editLinks: false,
    smoothScroll: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Cập nhật lần cuối',
    nav: [
      {
        text: 'About Avengers',
        link: '/about/',
      },
      {
        text: 'Techtalk',
        link: '/techtalk/',
      },
      {
        text: 'Product',
        link: '/config/'
      },
      {
        text: 'Top Reports',
        link: '/top-reports'
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About Avengers Group',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/techtalk/': [
        {
          title: 'Seminar nội bộ',
          collapsable: true,
          children: getChildren('./src/techtalk/')
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      },
    ]
  ]
}
