/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["cdna.artstation.com"],
    },
};

module.exports = nextConfig;
