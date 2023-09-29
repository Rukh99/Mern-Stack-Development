console.log('Hello');

let name ="sara";
var message ="Rukhsar Qureshi";
const num = "345";
console.log(name);

console.log(num);
console.table([name, message, num])
console.log (3+3)
// datatypes 

let name1 ="RUKHSAR"   // primitive datatypes - number, string, boolean => true / false , bigint , null , undefined , undefineds symbol => unique 
let age ="18"
let isloggedIn = false

console.log(typeof age);


// we are using node.js

// cannot be a reserved keyword because
// it should be meaning full name
// conversion operation 
let score=true;

console.log(typeof score);


//  1 = true and 0 = falset

// stack primitives 'heap (non primitive )

let mynewname ="rukhsar new "

let anothername3 ="chain"

console.log(mynewname);
console.log(anothername3);

console.log(`my name is ${mynewname} and another name is ${anothername3}`);
console.log(mynewname[1]);
console.log(mynewname.toLocaleUpperCase());


// arrays 

let marvel =["thor", "abcdefghijklmnop", "254"]

let heroes =["250", "350" , "500", "250"]
heroes.push(258);

 const arr5 = marvel.concat(heroes);

console.log(arr5);

const arr6 =[...marvel]
console.log(arr6);