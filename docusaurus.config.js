// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solus Help Center',
  tagline: 'Help center for the Solus operating system',
  favicon: 'img/support-icon-2.svg',

  // Set the production url of your site here
  url: 'https://help.getsol.us',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Solus', // Usually your GitHub org/user name.
  projectName: 'help-center-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Solus',
        logo: {
          alt: 'Solus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userSidebar',
            position: 'left',
            label: 'Help Center Home',
          },
          {
            type: 'docSidebar',
            sidebarId: 'packagingSidebar',
            position: 'left',
            label: 'Packaging',
          },
          {to: 'https://getsol.us/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/getsolus',
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
                label: 'Welcome',
                to: '/docs/user/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forums',
                href: 'https://discuss.getsol.us',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#solus:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SolusProject',
              },
              {
                label: 'Mastodon',
                href: 'https://fosstodon.org/@Solus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://getsol.us/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/getsolus',
              },
              {
                label: 'Dev Tracker',
                href: 'https://dev.getsol.us',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solus Project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config
