import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins/code';

const components = [
    {
      text: '基础',
      collapsed: false,
      items: [
        {
          text: 'Button 按钮',
          link: '/components/Button'
        },
        {
          text: 'Icon 图标',
          link: '/components/Icon'
        }
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
