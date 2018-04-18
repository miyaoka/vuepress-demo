module.exports = {
  title: 'VuePress',
  description: 'Vue-powered Static Site Generator',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'nav',
        link: '/nav/'
      },
      {
        text: 'nav2',
        link: '/nav2/'
      }
    ],
    sidebar: {
      '/nav/': [
        {
          title: 'Nav1',
          collapsable: false,
          children: ['', 'page1', 'page2']
        }
      ]
    }
  }
}
