function arr(inputArray) {
    const squareNumbersArray = [];
  
    for (let i = 0; i <= inputArray.length; i++) 
       {
        const squaredValue = inputArray[i] * inputArray[i];
    squareNumbersArray.push(squaredValue);
        
      }
    
  
    return squareNumbersArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Array= inputArray(squareNumbersArray);
  
  console.log("Original Array :" , inputArray);
  console.log("Even Numbers Array:", Array);