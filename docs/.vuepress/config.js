module.exports = {
  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'BrIaNY的小站',
  description: '随便逛逛，可能会有收获呢',
  base: '/myblog/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: '文章精华总结', link: '/book/' },
      { text: '技术干货', link: '/article/' },
      { text: 'GitHub', link: 'https://github.com/legendyxc' },
    ],
    sidebar:[
      {
        title: '文章精华总结',   // 必要的
        path: '/book/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 2,
        children: [
          {
            title: '《你不知道的Javascript》',   // 必要的
            path: '/book/you-dont-know-js/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              ['/book/you-dont-know-js/you-dont-know-js1', '万字总结 带你一步步吃透作用域 词法作用域 变量提升 闭包']
            ]
          }
        ]
      }, {
        title: '技术干货',   // 必要的
        path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 2
      }
    ]
  }
}