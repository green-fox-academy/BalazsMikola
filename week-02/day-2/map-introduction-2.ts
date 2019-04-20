
'use strict';

const myMap = {
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
