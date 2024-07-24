/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com"], // Add the domains you need
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/app/api/:path*", // Proxy to your custom API routes
      },
    ];
  },
};

export default nextConfig;
