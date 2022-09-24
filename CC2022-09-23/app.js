// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, 
// the interior architect, comes up with a plan to remove the most boring exhibitions. 
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair,
// so she asks you to write a program that tells her the ratings of the items after one 
// removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original 
// array/list. If there are multiple elements with the same value, remove the one with 
// a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


function removeSmallest(numbers) {
    let numbersCopy = [...numbers] //copy the original array using the spread operator so that the original array is not modified
    let min = Math.min(...numbers) //find the smallest value in the array
    numbersCopy.splice(numbers.indexOf(min), 1) //use index0f to find the lowest index that holds the smallest value. Then using splice, remove 1 index at the min location
    return numbersCopy //return the copy of original array since original array was not modified
  }