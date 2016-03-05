export default class Log {
	static disable() {
		this.disabled = true;
	}
	static write() {
		if (this.disabled) return;
		Function.prototype.apply.call(console.log, console, arguments);
	}
	static info() {
		if (this.disabled) return;
		Function.prototype.apply.call(console.info, console, arguments);
	}
	static debug() {
		if (this.disabled) return;
		Function.prototype.apply.call(console.debug, console, arguments);
	}
	static warning() {
		if (this.disabled) return;
		Function.prototype.apply.call(console.warn, console, arguments);
	}
	static error() {
		if (this.disabled) return;
		Function.prototype.apply.call(console.error, console, arguments);
	}
}