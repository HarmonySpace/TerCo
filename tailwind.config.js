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
			},
			"gray": {
				50: "#FAFAFA",
				100: "#F7F7F7",
				200: "#EEEEEE",
				300: "#D1D1D1",
				400: "#B3B3B3",
				500: "#949494",
				600: "#787878",
				700: "#595959",
				800: "#3B3B3B",
				900: "#1F1F1F",
				950: "#0F0F0F"
			}
    },
    fontFamily: {
      chivo: ['Chivo', 'monospace'],
			bold: ['Chivo-Bold', 'monospace']
    },
  },
}