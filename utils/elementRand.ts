export default (element: Array<string>) => {
	return element[Math.floor(Math.random() * element.length)];
};
