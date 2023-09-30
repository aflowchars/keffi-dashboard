/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				euclid: ['Euclid Circular B', 'sans-serif']
			},
			strokeWidth: {
				1.5: '1.5px'
			}
		}
	},
	plugins: []
};
