 function addnums(a,b)
 {
  var c= a+b;
    console.log(c);

 }
  addnums(25,17);

 function mul(a,b)
 {     var c=a*b;
    console.log(c)
  }
  mul(25,17)

  function InputArray()
  {
     let EvenNumbersArray=[];
 
 
  
    for(i=0;i<=InputArray.length;i++)   
      {
         if(InputArray[i] %2 ===0)
    {
        EvenNumbersArray.push(InputArray[i]);

    }
}
    return EvenNumbersArray;
}

 

 const inputArray =[2,4,5,6,8,7];
   const EvenNumbersArray = inputArray(evenNumbersArray);
   console.log("original array ", inputArray);
    console.log("even numbers array",EvenNumbersArray);
