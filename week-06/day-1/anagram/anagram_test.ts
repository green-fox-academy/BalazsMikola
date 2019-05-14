
'use strict';

import { anagram } from './anagram';
const test = require('tape').test;

test('anagram', function(t:any) {
  t.equal(anagram('abc', 'cba'), true);
  t.end();
});
