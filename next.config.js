module.exports = {
	future: {
		webpack5: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://twitch.tv',
				permanent: false,
			},
		]
	},
	async rewrites() {
		return [
			{
				source: '/:slug',
				destination: '/api/redirect?handle=:slug',
			},
			{
				source: '/images/:slug',
				destination: '/api/image?handle=:slug',
			},
		]
	},
}
