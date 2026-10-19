import { presetMarkdownIt } from '@nolebase/integrations/vitepress/markdown-it'
import { transformHeadMeta } from '@nolebase/vitepress-plugin-meta'
import MarkdownItFootnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

import enConfig from '../en/config'
import esConfig from '../es/config'
import jaConfig from '../ja/config'
import koConfig from '../ko/config'
import { githubRepoLink, siteDescription, siteName } from '../metadata/index'
import ptConfig from '../pt/config'
import ruConfig from '../ru/config'
import zhConfig from '../zh/config'
import head from './head'

const nolebase = presetMarkdownIt()

export default defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        NolebaseUnlazyImg: ['src'],
      },
    },
  },
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head,
  rewrites: {
    'en/:rest*': ':rest*',
  },
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24, alt: 'Sapphire Rapids' },
    socialLinks: [
      { icon: 'github', link: githubRepoLink },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-${new Date().getFullYear()} AmayaLab`,
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
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
                },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      ...enConfig,
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      ...zhConfig,
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      ...esConfig,
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      ...jaConfig,
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      ...koConfig,
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      ...ptConfig,
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      ...ruConfig,
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    math: true,
    preConfig: async (md) => {
      await nolebase.install(md)
    },
    config: (md) => {
      md.use(MarkdownItFootnote as any)
    },
  },
  async transformHead(context) {
    let head = [...context.head]

    const returnedHead = await transformHeadMeta()(head, context)
    if (typeof returnedHead !== 'undefined')
      head = returnedHead

    return head
  },
})
