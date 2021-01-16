// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

const withLess = require("@zeit/next-less");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withLess(
  withNx(
    withPlugins([
      [
        optimizedImages,
        {
          mozjpeg: {
            quality: 80,
          },
          pngquant: {
            speed: 3,
            strip: true,
            verbose: true,
          },
          imagesPublicPath: "/syncify.com/_next/static/images/",
        },
      ],
      {
        // Set this to true if you use CSS modules.
        // See: https://github.com/css-modules/css-modules
        cssModules: false,
        // basePath: "/syncify.com",
        // assetPrefix: "/syncify.com/",
        poweredByHeader: false,
        onDemandEntries: {
          maxInactiveAge: 1000 * 60 * 60,
        },
      },
    ])
  )
);
