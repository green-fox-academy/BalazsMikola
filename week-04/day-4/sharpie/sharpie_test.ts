
'use strict';

import { Sharpie } from './Sharpie';
import { isNumber } from 'util';
const test = require('tape').test;

test('new object', function(t:any) {
  const newSharpie:Sharpie = new Sharpie('yellow',1.5);
  t.deepEqual(newSharpie, {color: 'yellow', width: 1.5, inkAmount: 100 });
  t.end();
});

test('test color', function(t:any) {
  const newSharpie:Sharpie = new Sharpie('yellow',1.5);
  t.deepEqual(newSharpie.color, 'yellow');
  t.end();
});

test('return', function(t:any) {
  const newSharpie:Sharpie = new Sharpie('yellow',1.5);
  t.deepEqual(newSharpie.use(), undefined);
  t.end();
});

test('type', function(t:any) {
  const newSharpie:Sharpie = new Sharpie('yellow',1.5);
  t.deepEqual(newSharpie.inkAmount, 100);
  t.end();
});
