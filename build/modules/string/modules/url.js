//add paramaters to a URL
const addParam = $.addParam = (url, newItem) => {
	if (getLength(url) && has(url, questionMarkString)) {
		if (lastItem(url) === questionMarkString) {
			url = url + newItem;
		} else {
			url = url + andString + newItem;
		}
	} else {
		url = questionMarkString + newItem;
	}
	return url;
};
