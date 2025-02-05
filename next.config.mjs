/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/admin',
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true
  }
  // outputs: [".next/**", "!.next/cache/**"]
};

export default nextConfig;
