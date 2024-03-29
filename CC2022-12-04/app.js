// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let sorted = numbers.sort((a, b) => a - b)
    if(sorted[0] !== sorted[1]){
      return sorted[0]
    }else{
      return sorted[sorted.length - 1]
    }
  }

  //USING REDUCE METHOD

  function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
  }