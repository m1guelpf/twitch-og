const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				twitch: '#9146FF',
			},
			fontFamily: {
				sans: ['Roobert', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		({ addBase }) =>
			addBase([
				{
					'@font-face': {
						fontFamily: 'Roobert',
						fontWeight: '700',
						fontStyle: 'normal',
						fontDisplay: 'swap',
						src: 'url("/fonts/RoobertBold.woff2") format("woff2")',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Roobert',
						fontWeight: '400',
						fontStyle: 'normal',
						fontDisplay: 'swap',
						src: 'url("/fonts/RoobertRegular.woff2") format("woff2")',
					},
				},
			]),
	],
}
