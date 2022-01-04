class SimplyError extends Error {
	/**
	 * SimplyError
	 * @param {String} name
	 * @param {String} tip
	 */

	constructor(name, tip) {
		tip = tip || 'err'

		const msg = '"' + name + '"' + '\n' + 'Tip: ' + tip + '\n'
		super(msg)
	}
}

Object.defineProperty(SimplyError.prototype, 'name', {
	value: 'SimplyError'
})

module.exports = SimplyError
