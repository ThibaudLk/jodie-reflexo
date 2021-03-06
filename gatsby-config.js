module.exports = {
  siteMetadata: {
    title: 'Réflexolo-J',
    author: 'DevDurable',
    description: 'Le site web de l\'incroyable Jodie',
    keywords: 'réfléxologie, chinoise, nort-sur-erdre, plantaire, palmaire, massage, thérapeutique, gua sha, dan tian, moxibustion'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
