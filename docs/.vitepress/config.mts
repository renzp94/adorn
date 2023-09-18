import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins/code';

const components = [
    {
      text: '通用',
      collapsed: false,
      items: [
        {
          text: 'Button 按钮',
          link: '/components/Button'
        },
        {
          text: 'FloatButton 悬浮按钮',
          link: '/components/FloatButton'
        },
        {
          text: 'Icon 图标',
          link: '/components/Icon'
        },
        {
          text: 'Typography 排版',
          link: '/components/Typography'
        }
      ]
    },
    {
      text: '布局',
      collapsed: false,
      items: [
        {
          text: 'Divider 分割线',
          link: '/components/Divider'
        },
        {
          text: 'Grid 栅格',
          link: '/components/Grid'
        },
        {
          text: 'Layout 布局',
          link: '/components/Layout'
        },
        {
          text: 'Space 间距',
          link: '/components/Space'
        }
      ]
    },
    {
      text: '导航',
      collapsed: false,
      items: [
        {
          text: 'Affix 固钉',
          link: '/components/Affix'
        },
        {
          text: 'Breadcrumb 面包屑',
          link: '/components/Breadcrumb'
        },
      ]
    },
]

const nav = [
	{ text: '首页', link: '/' },
	{ text: '指南', link: '/guide/getting-started' },
	{ text: '组件', items: components },
];
const sidebar = {
	'/components': components,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Adorn",
  description: "adorn site",
  themeConfig: {
		logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/renzp94/adorn' }
    ]
  },
	markdown: {
		config: (md) => {
			applyPlugins(md);
		},
		theme: {
			light: 'vitesse-light',
			dark: 'vitesse-dark'
		}
	}
})
