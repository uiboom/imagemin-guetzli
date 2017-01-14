'use strict';
const execBuffer = require('exec-buffer');
const isJpg = require('is-jpg');
const guetzli = require('guetzli');

module.exports = opts => buf => {
	opts = Object.assign({}, opts);

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isJpg(buf)) {
		return Promise.resolve(buf);
	}

	const args = [];

	if (typeof opts.quality !== 'undefined') {
		args.push('-quality', opts.quality);
	}

	args.push(execBuffer.input);
	args.push(execBuffer.output);

	return execBuffer({
		input: buf,
		bin: guetzli,
		args
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
