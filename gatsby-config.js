const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

// const url = "https://api.imgix.com/api/v1/sources/621d6e77ab7c542a57446d8d/assets?page[size]=1000";
// const url2 = "DSC04315-2.jpg";
// const options = {
//   headers: {
//     Accept: "application/vnd.api+json",
//     Authorization: "Bearer " + process.env.GATSBY_IMGIX
//   }
// };
// let list_of_filenames = [];
// let getFilenames = async (url, options) => {
//   let imagedata;
//   fetch(url, options)
//       .then(res => res.json())
//       .then(data => {
//         console.log('data')
//         console.log(data)
//         imagedata = data;
//         for (let img of imagedata.data) {
//           let temp = img.id.split('/');
//           list_of_filenames.push(temp[temp.length - 1]);
//         }
//       });
//   return list_of_filenames;
// }
//
// getFilenames(url, options).then((result)=> {
//   console.log(result);
// });

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `DavidsPictures`,
    siteTitleAlt: `David Bodey Photography`,
    siteHeadline: `David Bodey - Photos of the Pacific Northwest`,
    siteUrl: `https://d38czca6q9wivk.cloudfront.net`,
    siteDescription: `A personal portfolio.`,
    siteLanguage: `en`,
    siteImage: `/banner.WEBP`,
    author: `@davidbodey`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Bodey - Photos of the Pacific Northwest`,
        short_name: `DavidsPictures`,
        description: `A personal portfolio.`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          // {
          //   src: `/android-chrome-192x192.png`,
          //   sizes: `192x192`,
          //   type: `image/png`,
          // },
          // {
          //   src: `/android-chrome-512x512.png`,
          //   sizes: `512x512`,
          //   type: `image/png`,
          // },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
  ].filter(Boolean),
}
