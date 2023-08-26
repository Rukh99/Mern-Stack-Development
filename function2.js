// declaring a function name greet 

function greet()
{
    console.log("rukhsar");
}

greet();

// program to add two numbers

function add(a,b)
{
    console.log(a+b);
}

add(2,5);
 // program to the use of return statement

//  function add(num1,num2)
//  {
//     return a+b ;
//  }

//  let x = add  (3,4);
 function test(nums)
 {
     for(i=1;i<=nums.length+1 ;i++)
     if(nums.indexOf(i) ===  -1);
     return i;
 }

 nums=[1,3,4,5,6]
 console.log("nums=  " +nums );
 console.log("missing number:  "+test(nums));

let arr=[1,4,5,6,7];
arr.sort();
console.log(arr);

arr.unshift(9);
console.log(arr);
 
