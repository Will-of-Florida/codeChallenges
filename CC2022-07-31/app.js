// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    let sum = x.reduce((a, b) => Number(a) + Number(b))
      return Number(sum)
}
