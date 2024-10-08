import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primaryWhite: '#F7F7F7',
				primaryBlue: '#0147FF',
				primaryBlack: '#282828',
			},
			screens: {
				phablet: '500px',
				laptop: '900px',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				robotoFlex: ['var(--roboto-flex)'],
				robotoCondensed: ['var(--roboto-condensed)'],
				bebasNeue: ['var(--bebas-neue)'],
			},
		},
	},
	plugins: [],
};
export default config;
