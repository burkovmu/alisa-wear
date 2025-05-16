/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 0,
    unoptimized: false,
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@heroicons/react'],
  },
  output: 'standalone',
  outputFileTracing: true,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, max-age=0, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },
  onDemandEntries: {
    // период (в мс), в течение которого страница должна оставаться в буфере
    maxInactiveAge: 0,
    // количество страниц, которые следует кэшировать
    pagesBufferLength: 1,
  },
};

module.exports = nextConfig; 