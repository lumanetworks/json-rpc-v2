function api(obj) {
	var result = {};
	for (var method in obj) {
		result[method] = call.bind(null, method);
	}
	return result;
}