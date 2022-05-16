// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Telos Docs',
  tagline: 'Documentation and Tutorials for Telos',
  url: 'https://docs.telos.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Telos_logo.png',
  organizationName: 'telosnetwork', // Usually your GitHub org/user name.
  projectName:'telos-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Telos Logo',
          src: 'img/Telos_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'overview',
            label: 'Overview',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'quickStart',
            label: 'Quick Start',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'dapps',
            label: 'DApps',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'nodes',
            label: 'Nodes',
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'nodes',
          //   label: 'Nodes',
          // }
          //{to: '/blog', label: 'Blog', position: 'left'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/4PBhQkE8NZ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HelloTelos',
              },
              {
                label: 'Telegram',
                href: 'https://twitter.com/HelloTelos',
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
                href: 'https://github.com/telosnetwork',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Telos Foundation, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
