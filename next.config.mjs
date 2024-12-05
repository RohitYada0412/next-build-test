/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/',
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true
  }
  // outputs: [".next/**", "!.next/cache/**"]
};

export default nextConfig;
