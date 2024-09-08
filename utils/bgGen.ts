export default (color: string) => {
	//return color ? `background-color: #${color};` : "background-color: #000000;";
	return color
		? "background-color: #" + color + ";"
		: "background-color: #000000;";
};
