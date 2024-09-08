// next.config.js
module.exports = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'serpapi.com',
          pathname: '/**',
        },
      ],
    },
  }
  