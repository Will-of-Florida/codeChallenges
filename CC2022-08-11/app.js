// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is 
//sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
   let array = input || [] // provided empty array as a fall back to prevent error "cannot read property 'length' of null"
   let countOfPositives = 0
   let sumOfNegatives = 0
   let empty = []
  
   
   for(let i = 0; i <= array.length; i++){
     if(array[i] > 0){
       countOfPositives++
     }else if(array[i] < 0){
       sumOfNegatives += array[i]
     }else if(array == 0){
       return empty
     }
   }
   return [countOfPositives, sumOfNegatives]
 }