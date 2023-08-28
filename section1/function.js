function addnums (a,b)
{
     var c=a+b;
    console.log(c);
}

addnums (23,67);

//console.log(c);

//using fuction keyword  and assignment operator 

const getpercent = function (m1,m2,m3,m4=70)
{
    console.log(m1,m2,m3,m4)
    let total =  m1+m2+m3+m4;
    let percent =total/4;


    return percent; //  function break 
    console.log(percent);
     
}
 const result= getpercent (23,25,63,90) // undefined error 
 

 console.log (result);

 // arrow function 

 const fact = (n) => {
    f=1;
    for(let i=2 ; i<=n; i++)
    {
        f*=i;  
    }
return f;
 }

 const factorial = fact(5);
 console.log(factorial);



