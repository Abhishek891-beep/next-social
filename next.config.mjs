/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: { 
    remotePatterns: [
      {
        protocol: "https" ,
        hostname: "www.pexels.com",
      }
    ],
  },
};

export default nextConfig;
