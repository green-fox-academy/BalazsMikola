
'use strict';

import { fibonacci } from './fibonacci';
const test = require('tape').test;

test('fibonacciIndex', function(t:any) {
  t.equal(fibonacci(10), 55);
  t.end();
});
