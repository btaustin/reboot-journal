import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  allowedDevOrigins: [ 'rebootjournal.xps.btaustin.com' ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bucket.rebootjournal.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.

 initOpenNextCloudflareForDev();
