const nums =[24,65,65,89,64,37,56]

for(i=0 ; i<nums.length; i++)
{
    console.log(nums[i]);

}

console.log ('---------------');

for(let i of nums )
{
    console.log(i ** 2);
}
// write a program to print only even numbers 

for ( let i of nums)
{
    if ( i%2=== 0)
    console.log(i);
}


 const names =['Raju' ,'ramu','shamu','pinki']

 for ( let i of names)
 {
    
    console.log(i.toUpperCase());
 }
