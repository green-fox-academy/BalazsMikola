import { Thing } from './thing';
import { Fleet } from './fleet';

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let fleet = new Fleet();
const toDo = [new Thing('Get milk'),new Thing('Remove the obstacles'),
new Thing('Stand up'),new Thing('Eat lunch'),];

function myList(){
  for(let i:number=0; i<toDo.length; i++){
    fleet.add(toDo[i]);
    console.log(`${i}. [${toDo[i].getCompleted() ? 'X':' '}] ${toDo[i].getName()}`);
  }
}

toDo[0].complete();
myList();
