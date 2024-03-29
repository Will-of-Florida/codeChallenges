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




// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

function arrayToList(array){
  let list = null //You need to start with null as first list value.
  for(let i = array.length -1; i >= 0 ; i--){
    list = {value: array[i], rest: list}
  }
  return list
}

function listToArray(list){
  let array = []
  for (let node = list; node; node = node.rest){
    array.push(node.value)
  }
  return array
}

function prepend(value, list) {
  return {value, rest: list};
}


function nth(list, n) {
  if (!list){
    return undefined
  }else if(n === 0){
    return list.value
  }else{
    return nth(list.rest, n-1)
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their 
// actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are 
// objects with the same properties, where the values of the properties are equal when compared with a 
// recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their 
// properties compared, you can use the typeof operator. If it produces "object" for both values, you should 
// do a deep comparison. But you have to take one silly exception into account: because of a historical 
// accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // Your code here.

function deepEqual(a,b)
{
  if( (typeof a == 'object' && a != null) && (typeof b == 'object' && b != null) ){
     
     var count = [0,0];
     for( var key in a) count[0]++;
     for( var key in b) count[1]++;
     if( count[0]-count[1] != 0) {return false;}
     for( var key in a){
       if(!(key in b) || !deepEqual(a[key],b[key])) {return false;}
     }
     for( var key in b){
       if(!(key in a) || !deepEqual(b[key],a[key])) {return false;}
     }
     return true;
  }
  else
  {
     return a === b;
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true