import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages HTML statiques de public/ servies sans le « /index.html » dans l'URL
  async rewrites() {
    return {
      // beforeFiles : vérifié avant la page d'accueil, sinon "/" la sert toujours en premier
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "cibler-les-facadiers.remibk-studio.fr" }],
          destination: "/cibler-les-facadiers/index.html",
        },
      ],
      afterFiles: [
        {
          source: "/cibler-les-facadiers",
          destination: "/cibler-les-facadiers/index.html",
        },
      ],
    };
  },
};

export default nextConfig;
