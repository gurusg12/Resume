/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['resume-git-main-gurusg12s-projects.vercel.app'], // ✅ your live domain
  },
  experimental: {
    appDir: true,
  },
  output: 'standalone', // ✅ helps Vercel deployment
};

export default nextConfig;
