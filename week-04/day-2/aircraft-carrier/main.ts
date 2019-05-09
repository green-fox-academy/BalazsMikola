'use strict';

import { Carrier } from "./Carrier";

const friendCarrier:Carrier = new Carrier(100,500);
friendCarrier.add('F16');
friendCarrier.add('F35');
friendCarrier.add('F35');
friendCarrier.fill();

const foeCarrier:Carrier = new Carrier(80,400);
foeCarrier.add('F16');
foeCarrier.add('F16');
foeCarrier.add('F35');
foeCarrier.fill();

console.log(friendCarrier.fight(foeCarrier));
