// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    let array = num.toString().split('') //split the number so that each number is its own index
    let squaredNumbers = [] //created an empty array to push the squared numbers into
    array.forEach((item) => { //iterates through array
    squaredNumbers.push(Math.pow(item,2)); //square each index then push it into squaredNumbers array
  });
    return Number(squaredNumbers.join('')) //.join('') turns the array into a string, so Number() is required
  }