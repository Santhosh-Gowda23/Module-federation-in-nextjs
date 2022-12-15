const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        remotes: {
          catalog: `catalog@http://localhost:8001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./footer": "./components/Footer.js",
          "./header": "./components/Header.js",
        },
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
