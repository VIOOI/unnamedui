/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		fontFamily: {
			code: [
				"Menlo",
				"Consolas",
				"Bitstream Vera Sans Mono",
				"monospace",
				"Apple Color Emoji",
				"Segoe UI Emoji",
			],
			italic: ["Times New Roman", "Times", "serif"],
		},
		extend: {},
	},
	plugins: [],
};
