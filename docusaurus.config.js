// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Solus Help Center",
  tagline: "Help center for the Solus operating system",
  favicon: "img/support-icon-2.svg",

  // Set the production url of your site here
  url: "https://help.getsol.us",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // Since we use the help.getsol.us CNAME for GH Pages, this is '/' for now
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "getsolus", // Usually your GitHub org/user name.
  projectName: "help-center-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/getsolus/help-center-docs/tree/master/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          blogTitle: 'Solus DevLog',
          blogDescription: 'The Solus Development (b)log!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          path: 'devlog',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.jpg",
      navbar: {
        title: "Solus",
        logo: {
          alt: "Solus Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "userSidebar",
            position: "left",
            label: "Help Center Home",
          },
          {
            type: "docSidebar",
            sidebarId: "packagingSidebar",
            position: "left",
            label: "Packaging",
          },
          {
            to: 'blog',
            label: 'Dev Log',
            position: 'left'

          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Welcome",
                to: "/docs/user/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forums",
                href: "https://discuss.getsol.us",
              },
              {
                label: "Matrix",
                href: "https://matrix.to/#/#solus:matrix.org",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SolusProject",
                rel: "me",
              },
              {
                label: "Mastodon",
                href: "https://fosstodon.org/@Solus",
                rel: "me",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://getsol.us/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/getsolus",
                rel: "me",
              },
              {
                label: "Packages",
                href: "https://dev.getsol.us",
              },
              {
                label: "Issue Tracker",
                href: "https://issues.getsol.us",
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

module.exports = config;
