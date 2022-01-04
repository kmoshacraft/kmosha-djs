
if (process.version.slice(1, 3) - 0 < 16)
	throw new Error(
		`NodeJS Version 16 or newer is required, but you are using ${process.version}. See https://nodejs.org/`
	)


try {
	require('discord.js')
} catch (e) {
	throw new Error('Discord.JS is required for this package to run')
}


const { version: discordJSVersion } = require(require('path').join(
	require.resolve('discord.js'),
	'..',
	'..',
	'package.json'
))


if (discordJSVersion.slice(0, 2) !== '13')
	throw new Error(
		`Discord.JS version 13 is required, but you are using ${discordJSVersion}. See https://www.npmjs.com/package/discord.js`
	)




module.exports.tictactoe = require('./src/tictactoe')
