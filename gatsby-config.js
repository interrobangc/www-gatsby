module.exports = {
  siteMetadata: {
    title: `Interrobang Consulting`,
    description: `Fractional CTO services with the support of an existing team`,
    author: `@robert-bo-davis`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `interrobang-consulting`,
        short_name: `interrobangc`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `img/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/img/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
  ],
}
