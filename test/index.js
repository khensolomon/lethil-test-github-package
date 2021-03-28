import 'mocha';
import core from '../lib/index.js';
import assert from 'assert';

describe('Checking', () => {
	it('Hello world', () => {
		const job = core();
		assert.strictEqual('Hello world',job);
	});
});