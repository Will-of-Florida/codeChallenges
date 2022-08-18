// Complete the function that takes a non-negative integer n as input, and returns a list 
// of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    let powersOf2Array = [] //create an empty array to store the numbers
    for(let i = 0; i <= n; i++){
      powersOf2Array.push(2**i) //push the powers of 2 into the array. Could also use .push(Math.pow(2, i))
    }
    return powersOf2Array
  }