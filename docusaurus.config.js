/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'H00KD',
  tagline: 'Documentation H00KD proof of asistance protocol',
  url: 'https://h00kd.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'ShardLabs', // Usually your GitHub org/user name.
  projectName: 'h00kd-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: 'H00KD Docs',
      logo: {
        alt: 'H00KD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/Shard-Labs/h00kd-contracts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ShardLabs/h00kd-docs/blob/main/',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { indexBlog: false, docsRouteBasePath: '/', indexPages: true },
    ],
  ],
}
