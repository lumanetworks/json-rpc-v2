// JSON RPC v2.0 - v0.1.0 - https://github.com/lumanetworks/json-rpc-v2
// Jaime Pillora <dev@jpillora.com> - MIT Copyright 2014
(function(window,undefined) {
var slice = Array.prototype.slice;
function api(obj) {
	var result = {};
	for (var method in obj) {
		result[method] = call.bind(null, method);
	}
	return result;
}
function call(method) {
	var rest = slice.call(arguments, 1);
	var callback = rest.pop();
	if (typeof callback !== "function")
		throw new Error("Missing callback");
	return 42;
}
//public interface
var JSONRPC = {
	call: call
};
//amd+commonjs+global definition
if (typeof this.define === "function" && this.define.amd) {
	define("xhook", [], function() {
		return JSONRPC;
	});
} else {

	
	(this.exports || this).JSONRPC = JSONRPC;
}
}.call(this,window));