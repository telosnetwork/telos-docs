// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {



  title: 'Telos Docs',
  tagline: 'Documentation and Tutorials for Telos',
  url: 'https://docs.telos.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav-icon.png',
 trailingSlash: true, // generates links differently an breaks almost all internal links. But when resolved will help with SEO
  organizationName: 'telosnetwork',
  projectName:'telos-docs',
  plugins: ['docusaurus-plugin-sass'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/telosnetwork/telos-docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**','/index-off','/markdown-page','/my-react-page'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  scripts: [
    {
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': "EKQJAMBV",
      defer: true,
    },
    {
      src: '/themeChanger.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {property: 'og:image', content: 'https://docs.telos.net/img/docs-social-share.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:type', content: 'website'},
        {property: 'twitter:image', content: 'https://docs.telos.net/img/docs-social-share.png'},
        {name: 'google-site-verification', content: 'HgXA9uRlyondYS68-b8ZBHo2KMpEv1h4LcUOSnJB1PE'},
      ],
      navbar: {
        title: '',
        logo: {
          alt: 'Telos Logo',
          src: 'img/telos-light.png',
          srcDark: 'img/telos-dark.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Developer Docs',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                label: 'Overview',
                sidebarId: 'overview',
              },
              {
                type: 'docSidebar',
                label: 'Quick Start',
                sidebarId: 'quickStart',
              },
              {
                type: 'docSidebar',
                sidebarId: 'digitalAssets',
                label: 'Digital Assets',
              },
              {
                type: 'docSidebar',
                sidebarId: 'evm',
                label: 'Telos EVM',
              },
              {
                type: 'docSidebar',
                sidebarId: 'zero',
                label: 'Telos Zero',
              },
              {
                type: 'docSidebar',
                sidebarId: 'nodes',
                label: 'Nodes',
              },
            ],
            
          },
          {
            type: 'dropdown',
            label: 'User Guides',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'gettingStarted',
                label: 'Getting Started',
              },
              {
                type: 'docSidebar',
                sidebarId: 'knowledgeBase',
                label: 'Knowledge Base',
              },
            ],
          },
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
                href: 'https://discord.gg/telos',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HelloTelos',
              },
              {
                label: 'Developer Twitter',
                href: 'https://twitter.com/TelosDevelopers',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/HelloTelos',
              },
            ],
          },
          {
            title: 'Block Explorers',
            items: [
              {
                label: 'Telos Zero',
                href: 'https://explorer.telos.net',
              },
              {
                label: 'EVM - Teloscan',
                href: 'https://teloscan.io',
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                href: 'https://www.telos.net/news',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'M49QB996FG',
        apiKey: '781dec423a50110abbe2e262dec95659',
        indexName: 'telos',
        contextualSearch: true,
     },
    }),
};

module.exports = config;
