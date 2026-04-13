import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone"
  // - Traces and copies only the files needed to run the server (no full node_modules in image)
  // - Reduces Docker image size from ~200MB+ down to ~50-80MB
  // - Required for the multi-stage Dockerfile (runner stage uses .next/standalone/server.js)
  // - Remove this if deploying to Vercel/Netlify — they handle optimization automatically
  output: "standalone",
};

export default nextConfig;
