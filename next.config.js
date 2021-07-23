const withImages = require("next-images");

module.exports = withImages();

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/students",
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "mdx"],

//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,

//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           //   options: pluginOptions.options,
//         },
//       ],
//     });

//     return config;
//   },
// });
