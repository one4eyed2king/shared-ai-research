import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.shared-ai-research.org' }],
        destination: 'https://shared-ai-research.org/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
