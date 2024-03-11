/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
			"blue": {
				50: "#E6F2FF",
				100: "#CDE5FE",
				200: "#9ACAFE",
				300: "#68B0FD",
				400: "#3596FD",
				500: "#037AF9",
				600: "#0263CA",
				700: "#024A97",
				800: "#013165",
				900: "#011932",
				950: "#000C19"
			}
    },
    fontFamily: {
      chivo: ['Chivo', 'monospace'],
			bold: ['Chivo-Bold', 'monospace']
    },
  },
}