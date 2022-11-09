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
    poweredByHeader: false,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    async redirects() {
        return [...redirectToBasePath];
    },
};

module.exports = nextConfig;
