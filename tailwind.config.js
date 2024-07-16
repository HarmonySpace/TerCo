/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		colors: {
			shark: {
				50: "#EFF2F5",
				100: "#E3E7ED",
				200: "#C4CDD9",
				300: "#A8B6C7",
				400: "#899BB3",
				500: "#6D84A1",
				600: "#566A85",
				700: "#445469",
				800: "#303B4A",
				900: "#1D242D",
				950: "#0E1116",
			},
			mercury: {
				50: "#FAFAFA",
				100: "#F2F2F2",
				200: "#E8E8E8",
				300: "#DBDBDC",
				400: "#CECFCF",
				500: "#C4C4C5",
				600: "#B7B8B9",
				700: "#888A8B",
				800: "#5B5C5D",
				900: "#2D2E2F",
				950: "#171717",
			},
		},
		fontFamily: {
			chivo: ["Chivo", "monospace"],
			bold: ["Chivo-Bold", "monospace"],
		},
	},
};
