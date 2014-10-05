function call(method) {
	var rest = slice.call(arguments, 1);
	var callback = rest.pop();
	if (typeof callback !== "function")
		throw new Error("Missing callback");
	return 42;
}