
'use strict';

const myMap:any = {
  '978-1-60309-452-8':'A Letter to Jo',
  '978-1-60309-459-7':'Lupus',
  '978-1-60309-444-3':'Red Panda and Moon Bear',
  '978-1-60309-461-0':'The Lab'
};
/*
Print all the key-value pairs in the following format:
A Letter to Jo (ISBN: 978-1-60309-452-8)
Lupus (ISBN: 978-1-60309-459-7)
Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
The Lab (ISBN: 978-1-60309-461-0)*/

for (const [key, value] of Object.entries(myMap)) {
  console.log(`${value} (ISBN: ${key})`);
}
//Remove the key-value pair with key 978-1-60309-444-3
delete myMap["978-1-60309-444-3"];

//Remove the key-value pair with value The Lab
Object.keys(myMap).forEach(x => myMap[x] === 'The Lab' ? delete myMap[x] : undefined);

//Add the following key-value pairs to the map
//978-1-60309-450-4	They Called Us Enemy
//978-1-60309-453-5	Why Did We Trust Him?
myMap['978-1-60309-450-4'] = 'They Called Us Enemy';
myMap['978-1-60309-453-5'] = 'Why Did We Trust Him?';

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(myMap.hasOwnProperty('478-0-61159-424-8'));

//Print the value associated with key 978-1-60309-453-5
console.log(myMap['978-1-60309-453-5']);
