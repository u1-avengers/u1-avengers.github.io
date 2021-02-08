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
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Tìm kiếm',
    repo: 'u1-avengers/u1-avengers.github.io',
    repoLabel: 'Contribute!',
    editLinks: false,
    smoothScroll: true,
    docsBranch: 'main',
    docsDir: 'src',
    editLinkText: 'Sửa bài viết này',
    lastUpdated: 'Cập nhật lần cuối',
    nav: [
      {
        text: 'Techtalk',
        link: '/techtalk/',
      },
      {
        text: 'Product',
        link: '/product/'
      },
      {
        text: 'Top Reports',
        link: '/top-reports'
      }
    ],
    sidebar: {
      '/techtalk/': [
        {
          title: 'Seminar nội bộ',
          collapsable: true,
          children: getChildren('./src/techtalk/')
        }
      ],
      '/product/': [
        {
          title: 'Product',
          collapsable: true,
          children: getChildren('./src/product')
        }
      ]
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
        updatePopup: true,
        updatePopup: {
          message: 'Đã có dữ liệu mới',
          buttonText: 'Cập nhật ngay'
        }
      },
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      }
    ],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
  ]
}
