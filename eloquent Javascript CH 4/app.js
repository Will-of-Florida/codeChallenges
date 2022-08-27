// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute 
// the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an 
// array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of 
// these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument 
// that indicates the “step” value used when building the array. If no step is given, the
//  elements go up by increments of one, corresponding to the old behavior. The function call 
//  range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative 
//  step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

function range(start, end, step) {
  let array = []
  
//Incase start parameter is a larger number than the end parameter
  if(start > end){ 
    for(let i = start; i >= end; i -= step){ //i -= step so that the array counts down from large start to smaller end
      array.push(i)
      }
//Incase start parameter is a larger number than the end parameter and step parameter is not given.
//This if statement is nested inside the start > end if statement so that the statement does not affect 
// scenarios when start < end (for example, the if statements starting on line 39 )
        if(start > end && step === undefined){ 
          for(let j = start - 1; j >= end; j--){ //start - 1 gets rid of the extra unwanted index that gets created. 
            array.push(j)
         }
        }
  }


  if(step === undefined){ //Incase the step parameter is not given, step is defaulted to 1
    for(let i = start; i <=end; i++){
      array.push(i)
    }
  }

  else if(step > 0){ 
    for(let i = start; i <=end; i += step){ //if step parameter is positive, increment up by step
      array.push(i)
    }
  }

  else if(step < 0){
    for(let i = end; i >= start; i += step){ //if step parameter is negative, start at end parameter assuming 
// that end parameter is larger than the start parameter and increment up by negative step parameter 
// (essentially counting down by step)
      array.push(i)
    }
  }

  return array
  };

//Summation of the range section of the assignment
let sum = function(arr){
    let sumOfRange = arr.reduce((a, b) => a + b, 0)
    return sumOfRange
}



console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(2, 5, -1));
// // → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// // → 55





// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
// takes an array as argument and produces a new array that has the same elements in the inverse order. The 
// second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by 
// reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do 
// you expect to be useful in more situations? Which one runs faster?

function reverseArray(array){
  let reversed = [] //create an empty array to push the reversed values to
  for (let i = array.length - 1; i >= 0; i--){ //start at the last index and increment down until the first index [0] is reached
    reversed.push(array[i]) //must be .push(array[i]) to push the values and not the index numbers into the empty array 
  }
  return reversed
}


function reverseArrayInPlace(arr){
  for (let i = 0; i < Math.floor(arr.length / 2); i++){
    let currentArr = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = currentArr
  }
  return arr
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]