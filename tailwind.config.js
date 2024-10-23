/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				brightRed: 'hsl(12,88%,59%)',
				brightRedLight: 'hsl(12,88%,69%)',
				brightRedSubLight: 'hsl(12,88%,95%)',
				darkBlue: 'hsl(228,39%,23%)',
				darkGrayishBlue: 'hsl(227,12%,61%)',
				verDarkBlue: 'hsl(233,12%,13%)',
				veryPaleRed: 'hsl(13,100%,96%)',
				verLightGray: 'hsl(0,0%,98%)'
			}
		}
	},
	plugins: []
}