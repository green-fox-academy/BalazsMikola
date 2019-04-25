
'use strict';

import { countLetters } from './count-letters';
const test = require('tape').test;

test('dictionary', function(t:any) {
  t.deepEqual(countLetters('abcdaaa'), { a: 4, b: 1, c: 1, d: 1 });
  t.end();
});
