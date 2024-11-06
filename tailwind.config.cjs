
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				"tech-box-bg": "rgba(255, 255, 255, 0.5)",
				primary: "#1d4ed8",
				"primary-dark": "#3b82f6", 
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
				bgHeader: "rgba(239, 241, 243, 0.3)",
				bgHeaderDark: "rgba(3, 7,18, 0.7)"
			},
			screens:{
				midmd:"880px"
			},
			letterSpacing: {
				tight: '-0.05em',
				normal: '0',
				wide: '0.1em',
			  },
			  keyframes: {
				slideDown: {
				  '0%': { transform: 'translateY(-100%)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
			  },
			  animation: {
				slideDown: 'slideDown 0.9s ease-out forwards',
			  },
		},
	},
	plugins: [],
}
