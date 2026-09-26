import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages HTML statiques de public/ servies sans le « /index.html » dans l'URL
  async rewrites() {
    return [
      {
        source: "/cibler-les-facadiers",
        destination: "/cibler-les-facadiers/index.html",
      },
    ];
  },
};

export default nextConfig;
