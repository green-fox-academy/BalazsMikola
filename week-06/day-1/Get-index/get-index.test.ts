
import { getIndex } from './get-index';

const test = require('tape');

test('not a part of the array', t => {
  let sampleArray: number [] = [1, 2, 3, 5, 5];
  let sampleValue: number = 6;

  var actual = getIndex(sampleArray, sampleValue);
  var expected = -1;

  t.equal(actual, expected);
  t.end();
});