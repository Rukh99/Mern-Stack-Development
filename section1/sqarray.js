function arr(inputArray) {
    const squareNumbersArray = [];
  
    for (let i = 0; i < inputArray.length; i++) 
       {
        const squaredValue = inputArray[i] * inputArray[i];
    squareNumbersArray.push(squaredValue);
        
      }
    
  
    return squareNumbersArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Array= arr(inputArray);
  
  console.log("Original Array :" , inputArray);
  console.log("Even Numbers Array:", Array);

  // write a program to store even numbers  in arrays
const nums =[2,4,9,7,8,10]

const ev
  for(let n of nums )
  {
    if(n % 2 === 0)
    {
      evenNums.push(n);
    }
  }

  console.log("Even Numbers Array)