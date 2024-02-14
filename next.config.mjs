/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/:locale(en|fr|de)/dashboard",
        destination: "/dashboard/:locale",
      },
    ];
  },
};

export default nextConfig;
