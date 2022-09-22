// Notes

// Number passed is always Positive .
// Return the result as a Boolean
// Input >> Output Examples

// tidyNumber (12) ==> return (true)

// Explanation:

// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)

// Explanation:

// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

// tidyNumber (1024) ==> return (false)

// Explanation:

// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

// tidyNumber (13579) ==> return (true)

// Explanation:

// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

// tidyNumber (2335) ==> return (true)

// Explanation:

// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3


function tidyNumber(n){
    let array = n.toString().split('')
    if(n == array.sort().join('')){
      return true
    }else{
      return false
    }
  }
  
   
  
//To create an array out of n, first make it a string with toString() and 
//then .split('') to make it into an array
  
//If n is tidy, then it will equal be equal array.sort() which sorts the arrays 
//in ascending order based on UTF-16 code values
  
//array.join('') to turn it back into a string