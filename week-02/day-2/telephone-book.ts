/*We are going to represent our contacts in a map where the keys 
are going to be strings and the values are going to be strings as well.
Create a map with the following key-value pairs.
Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
*/

'use strict';

const phoneBook: {[i:string]:string} = {
  'William A. Lathan':'405-709-1865',
  'John K. Miller':'402-247-8568',
  'Hortensia E. Foster':'606-481-6467',
  'Amanda D. Newland':'319-243-5613',
  'Brooke P. Askew':'307-687-2982'
};

//Create an application which solves the following problems.
//What is John K. Miller's phone number?
//Whose phone number is 307-687-2982?
//Do we know Chris E. Myers' phone number?

function searchInPhoneBook(map:{[i:string]:string}, name?:any, number?:string){
  if(number===undefined){
    phoneBook.hasOwnProperty(name) ? console.log(`${name}: ${phoneBook[name]}`) : console.log(`We dont know ${name}'s phone number`);

  }else Object.keys(phoneBook).forEach(element => 
    phoneBook[element] === '307-687-2982' ? console.log(`Number ${phoneBook[element]} belongs to ${element}`) : undefined
    );
}
searchInPhoneBook(phoneBook, 'John K. Miller');
searchInPhoneBook(phoneBook, 'Chris E. Myers');
searchInPhoneBook(phoneBook, '', '307-687-2982');
