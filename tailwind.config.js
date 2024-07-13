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
				50: "#F8F7F7",
				100: "#F3F2F2",
				200: "#E5E3E3",
				300: "#C9C5C5",
				400: "#AEA8A8",
				500: "#938B8B",
				600: "#776F6F",
				700: "#5A5353",
				800: "#3A3636",
				900: "#1D1B1B",
				950: "#100F0F",
			},
		},
		fontFamily: {
			chivo: ["Chivo", "monospace"],
			bold: ["Chivo-Bold", "monospace"],
		},
	},
};
