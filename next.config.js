/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	async redirects() {
		return
				[...redirectToBasePath]

},
}

module.exports = nextConfig
