const movies =['KGF','RRR','FASTX','BARBIE','TUBELIGHT','DREAMGIRL']

console.log (movies.length); // also works with strings
//indexing 
 console.log(movies[4]);  // also works with strings

 console.log (movies[2]); // also works with strings 

 console.log (movies[-2]); // also works with strings 

 // slicing -accessing more than one element

 console.log (movies.slice(2,5))  // also works with strings 

 console.log(movies.slice(2));
 console.log(movies.slice(2,100)); 

 // adding elemnets

 movies.push('dangal'); // add element at end of the array 

 movies.unshift('koi mil gya')// add elements at start of the array 

 console.log(movies);

 // removing elemnets 
 movies.pop() ;        // removes elements from end of the array
 movies.shift();   // removes elemnts start of the array 

 console.log(movies);

 movies.splice(2,2);

 console.log(movies);

 const nums =['34','45','60','18','25','36']

console.log(nums.splice (2,2))

console.log(nums);

console.log(['first',...movies,'last']);
console.log ([...movies.slice(0,2), movies.at(-1)]);




// console.log (nums.splice(3,3));

// console.log(nums);

// console.log( ['first', ...movies , 'last' ]);
// console.log(movies) ;     // spread operator

// console.log ([...movies.slice(0,2),movies.at(-1)]);

