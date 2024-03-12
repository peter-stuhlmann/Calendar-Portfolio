/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    deviceSizes: [640],
    imageSizes: [128, 256, 384, 442, 496, 589],
  },
};

export default nextConfig;
