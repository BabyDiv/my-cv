// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   basePath: "/my-cv",
//   assetPrefix: "/my-cv",
// };

// export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
