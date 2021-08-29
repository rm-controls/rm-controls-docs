const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'rm-controls documentation',
  tagline: '',
  url: 'https://rm-controls.github.io',
  baseUrl: '/rm-controls-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rm-controls',
  projectName: 'rm-controls-docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-cn': {
        label: '中文',
        direction: 'ltr',
      },
    },
  },
  themeConfig: {
    announcementBar: {
      id: 'star',
      content:
          '⭐️ If you like rm-controls, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/rm-controls/rm_control">rm_control</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/rm-controls/rm_controllers">rm_controllers</a> ! ⭐️',
    },
    navbar: {
      title: 'rm-controls',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview/intro',
          position: 'right',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/rm-controls',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}. Distributed by BSD 3-Clause License`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'current_docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rm-controls/rm-controls-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rm-controls/rm-controls-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        docsDir: "current_docs",
        indexBlog: false,
      },
    ],
  ],
};
