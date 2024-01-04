/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.resolve.fallback = { fs: false, module: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Button': './src/components/Button/Button.tsx',
          './Box': './src/components/Box/Box.tsx',
          './handleRemoteModules': './src/utils/handleRemoteModules/handleRemoteModules.ts'
        }
      })
    );

    return config;
  }
};

module.exports = nextConfig;
