'use strict';

import { Farm } from "./Farm";

const newFarm:Farm = new Farm(10);
newFarm.breed('Sheep');
newFarm.breed('Cow');
newFarm.breed('Horse');
newFarm.listOfAnimals[2].play();
console.log(newFarm.slaughter());
