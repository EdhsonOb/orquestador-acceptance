import { test } from 'node:test';
import assert from 'node:assert/strict';
import { messageFor } from '../src/message.js';
import { increment } from '../src/counter.js';

test('message is a string', () => assert.equal(typeof messageFor(), 'string'));
test('increment adds one', () => assert.equal(increment(1), 2));
