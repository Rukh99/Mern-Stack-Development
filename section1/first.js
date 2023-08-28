const arr=[
    "John Doe",
"Jane Smith",
"Michael Johnson",
"Emily Brown"]


console.log(arr);

const ans5 =arr.map((q) => {return q.split(' ') [0]});

console.log(ans5);


const arr2 =["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

    
const ans6 =arr2.filter((n) =>  {return n.length > 4 });

console.log(ans6);