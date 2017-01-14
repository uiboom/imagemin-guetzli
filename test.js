import fs from 'fs';
import path from 'path';
import isJpg from 'is-jpg';
import pify from 'pify';
import test from 'ava';
import m from './';

const fsP = pify(fs);

test('optimize a JPG', async t => {
	const buf = await fsP.readFile(path.join(__dirname, 'fixture.jpg'));
	const data = await m({quality: 90})(buf);

	t.true(data.length < buf.length);
	t.true(isJpg(data));
});

test('skip optimizing a non-JPG file', async t => {
	const buf = await fsP.readFile(__filename);
	const data = await m()(buf);

	t.deepEqual(data, buf);
});
