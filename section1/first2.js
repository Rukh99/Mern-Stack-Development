const arr=[2,4,9,8,10,65]

const ans2 =arr.map((q)  => {return q*2});

console.log(ans2);

const ans5 =arr.filter((q) => {return  q %2  == 0 });

console.log(ans5);



arr.push(3);
console.log(arr);

arr.shift();

console.log(arr);