import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins/code';
import pkg from '../../packages/adorn-ui/package.json'
import components from '../components/config';

const nav = [
	{ text: '指南', link: '/guide/getting-started' },
	{ text: '组件', link: '/components/overview' },
  {
    text: pkg.version,
    items: [
      {
        text: '更新日志',
        link: 'https://github.com/renzp94/adorn/blob/main/packages/adorn-ui/CHANGELOG.md',
      },
    ],
  },
];
const sidebar = {
	'/components': components,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Adorn",
  description: "一款基于Svelte 5开发的组件库",
  head: [['link', { rel: 'icon', type: 'image/svg', href: '/logo.svg' }]],
  lastUpdated: true,
  metaChunk: true,
  themeConfig: {
		logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/renzp94/adorn' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            },
          },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/renzp94/adorn/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
  },
	markdown: {
		config: (md) => {
			applyPlugins(md);
		},
		theme: {
			light: 'vitesse-light',
			dark: 'vitesse-dark'
		}
	},
  
})
