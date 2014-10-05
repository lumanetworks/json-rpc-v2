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