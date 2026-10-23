import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { sidebar } from './sidebar';
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart';
import footnote from 'markdown-it-footnote';

export default defineUserConfig({
  base: '/',
  lang: 'en-EN',
  title: 'FairPlay Documentation',
  description: "FairPlay's project documentation",

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Project', link: '/project/' },
      { text: 'Philosophy', link: '/philosophy/' },
      { text: 'Developers', link: '/developers/' },
      { text: 'Swagger', link: 'https://apiv2.fairplay.video/docs' },
    ],
    sidebar,
  }),

  bundler: viteBundler(),

  extendsMarkdown: (md) => {
    md.use(footnote);
  },

  plugins: [
    markdownChartPlugin({
      plantuml: true,
    }),
  ],
});
