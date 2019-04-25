
'use strict';

import { sumClass } from './sum';
const test = require('tape').test;

test('sum of numbers', function(t:any) {

  const newSumClass:sumClass = new sumClass();
  const listOfNumbers:number[] = [1,2,3];

  t.equal(newSumClass.sum(listOfNumbers), 6);
  t.end();
});

test('empty array', function(t:any) {

  const newSumClass:sumClass = new sumClass();
  const listOfNumbers:number[] = [];

  t.equal(newSumClass.sum(listOfNumbers), 0);
  t.end();
});
