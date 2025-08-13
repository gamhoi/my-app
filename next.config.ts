// next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
// const repo = 'my-app'; // ← 改成你的仓库名；如果部署到根域名就留空并删掉下面两行

const nextConfig: NextConfig = {
  output: 'export',              // 关键：静态导出
  images: { unoptimized: true }, // GitHub Pages 无法用内置图片优化
  trailingSlash: true,           // 导出更友好（生成以 / 结尾的路径）
  ...(isProd ? {                 // 仅生产环境使用子路径
    // basePath: `/${repo}`,
    // assetPrefix: `/${repo}/`,
  } : {}),
  eslint: {
    ignoreDuringBuilds: true,  // ← 关键：构建时忽略 ESLint
  },
};

export default nextConfig;
