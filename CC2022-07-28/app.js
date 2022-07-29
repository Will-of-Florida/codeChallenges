// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers

function nearestSq(n){
    let nonSqNumber = Math.sqrt(n)
    let sqNumber = Math.round(nonSqNumber)
    return Math.pow(sqNumber , 2)
  }