const manifestConfig = require('./manifest-config')

module.exports = {
  siteMetadata: {
    title: 'stevenmarc.me',
    description: 'Steven-Marc Couchouron developer portfolio',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: manifestConfig,
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`100`],
          },
          {
            family: `Quicksand`,
            variants: [`300`],
          },
        ],
      },
    },
  ],
}
