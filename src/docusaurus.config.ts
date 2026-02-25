import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const github_org = 'LabNow-ai';
const github_repo = 'doc-labnow';
const github_dir = 'src';
const name_brand = 'LabNow';

const config: Config = {
  title: 'LabNow.ai',
  tagline: 'One-stop AI and Data Science Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.labnow.ai',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config. If you aren't using GitHub pages, you don't need these.
  organizationName: `${github_org}`, // Usually your GitHub org/user name.
  projectName: `${github_repo}`, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set useful metadata like html lang.
  // For example, if your site is Chinese, you may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo. Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${github_org}/${github_repo}/tree/main/${github_dir}/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo. Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${github_org}/${github_repo}/tree/main/${github_dir}/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: `${name_brand}`,
      logo: { alt: 'Logo', src: 'img/logo.svg', },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${github_org}/`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro-en',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussion',
              href: `https://github.com/${github_org}/${github_repo}/discussions`,
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/kHUzgQxgbJ',
            },
            {
              label: 'Gitter',
              href: 'https://matrix.to/#/#QPod_community:gitter.im',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: `https://github.com/${github_org}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${name_brand}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
