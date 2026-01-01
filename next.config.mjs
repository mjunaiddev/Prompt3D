/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.externals.push({ canvas: "commonjs canvas" });
    return config;
  },
};

export default nextConfig;
