var isDocumentReady = $.isDocumentReady = (func) => {
	var state = documentNode.readyState;
	if (state === 'interactive' || state === 'completed' || state === 'complete') {
		return (func) ? func() : True;
	}
	if (func) {
		eventAdd(documentNode, "DOMContentLoaded", func);
	}
	return False;
};

isDocumentReady(() => {
	domHeadNode = qsSelector('head');
});
