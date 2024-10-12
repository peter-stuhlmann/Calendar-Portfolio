/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    deviceSizes: [640, 1200],
    imageSizes: [128, 256, 384, 442, 496, 589],
  },
};

export default nextConfig;
