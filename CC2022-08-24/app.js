// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]

// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {

    let z = [];
  
    for (let i = x; i <= (x*n); i += x ){
//i <= (x * n) because x * n tells which number to stop incremeting to. Example, countBy(2,5) the question is 
//expecting that the array will be 5 indexes long that goes to a number value of 10 (2*5 == 10). Hence 2,4,6,8,10. 
      z.push(i)
  
    }
  
    return z;
  
    }