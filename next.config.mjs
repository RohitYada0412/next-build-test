/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/admin',
  distDir: 'build',
  output: 'export',
  trailingSlash: true, // Ensure proper URL structure for static export
  images: {
    unoptimized: true
  }
};

export default nextConfig;
