export default class UUID {
	static create() {
		const uuid = function(a, b) {
			for (b = a = ''; a++ < 36; b += 4 << ~a * 6.5 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');
			return b
		}
		return uuid();
	}
}