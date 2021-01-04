module.exports = {
  siteMetadata: {
    title: `My M365 Blog`,
    author: {
      name: `Nicolas Kheirallah`,
      summary: `Software Engineer with focus on M365 development.`,
    },
    description: `A M365 blog using Gatsby and Tailwind.`,
    siteUrl: `http://yourmodernworkplace.com//`,
    social: {
      twitter: `Chiichooz`,
    },
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-drupal`,
    //   options: {
    //     baseUrl: `https://yourmodernworkplace.com/`,
    //     basicAuth: {
    //       username: process.env.BASIC_AUTH_USERNAME,
    //       password: process.env.BASIC_AUTH_PASSWORD,
    //       secret: process.env.PREVIEW_SECRET
    //     },
    //     fastBuilds: true,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
    },
  },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
