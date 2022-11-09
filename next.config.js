/** @type {import('next').NextConfig} */

const redirectToBasePath = [
    {
        source: '/',
        destination: '/company',
        basePath: false,
        permanent: false,
    },
];

const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [...redirectToBasePath];
    },
};

module.exports = nextConfig;
