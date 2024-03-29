// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them 
// into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 
// are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
// If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
// Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

function mergeArrays(arr1, arr2) {
    let joinedArray = arr1.concat(arr2) //using .concat() to combine the two arrays 
    let finalArray = [...new Set(joinedArray)] //using the spread operator with new Set(array) to create a unique array with no duplicates
    return finalArray.sort((a, b) => a - b)
  }

  //Set() is a data structure that holds a collection of values. A value can be part of a set only once - adding
  //it again does not have any effect.
