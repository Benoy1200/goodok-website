/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.goodokshop.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
    // 使用现代格式
    formats: ['image/avif', 'image/webp'],
    // 禁用静态导入优化（如果需要）
    disableStaticImages: false,
  },

  // 头部优化
  headers: async () => {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1年缓存
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // 重定向配置
  redirects: async () => {
    return [];
  },

  // 重写配置
  rewrites: async () => {
    return [];
  },

  // SWC 压缩
  swcMinify: true,

  // 性能优化
  experimental: {
    optimizeCss: true, // CSS 优化
  },

  // TypeScript 严格模式
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // ESLint 在构建中
  eslint: {
    dirs: ['app', 'components'],
  },

  // 输出配置
  output: 'standalone',

  // 环境变量
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

module.exports = nextConfig;
