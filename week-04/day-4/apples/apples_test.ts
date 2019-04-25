'use strict';

import { appleClass } from './apples';
const test = require('tape').test;

test('give me my apple', function(t:any) {
  const newAppleClass:appleClass = new appleClass();
  t.equal(newAppleClass.getApple(), 'apple');
  t.end();
});
