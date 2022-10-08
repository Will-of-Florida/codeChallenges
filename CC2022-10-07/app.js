// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


function multipleOfIndex(array) {
    let multiples = [] //create new empty array to put values into
    for(let i = 0; i < array.length; i++){ //iterates over array
      if(array[i] % i === 0){ //if the value in array[i] divided by the index number i gives 0 as a remainder
        multiples.push(array[i]) //push those values into the multiples array
      }
    } 
    return multiples 
  }