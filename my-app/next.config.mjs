/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pub-ee7d57261fe04297bd2ce9e0abe5eb8c.r2.dev"],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            publicPath: '/_next/static/worker',
            outputPath: 'static/worker',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
