require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Eternal Journal',
    menuLinks:[
      {
name:'home',
 link:'/'
},
{
name:'subscription',
 link:'/buy-journal-box'
 },
{
name:'guided',
 link:'/buy-guided-journals'
 } ,
{
name:'blog',
 link:'/blog'
 },
{
name:'forum',
 link:'/forum'
 },
{
name:'us',
 link:'/why-choose-eternal'
 }
 ]
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Sorts Mill Goudys`,
            variants: [`400`, `400i`]
          },
          {
            family: `Quicksand`,
            variants: [`300`]
          },
     
        ],
      }
    }, 


  ],
}
