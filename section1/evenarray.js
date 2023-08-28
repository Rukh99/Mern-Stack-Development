function EvenNumbers(inputArray) {
    let evenNumbersArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % 2 === 0) {
        evenNumbersArray.push(inputArray[i]);
      }
    }
  
    return evenNumbersArray;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = EvenNumbers(numbers);
  
  console.log("Original Array:", numbers);
  console.log("Even Numbers Array:", evenNumbers);