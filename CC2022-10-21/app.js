// Your task is to make a function that can take any non-negative integer as an argument and return it 
// with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let numberToString = n.toString() //convert the integer to a string so we can use .split() 
    let array = numberToString.split('').sort((a,b) => b - a).join('') //converted the string into an array and then sort in descending order. Used .join() to convert back to string
    return Number(array) //use Number() to make the answer an integer
  }