// The goal of this kata is to write a function that takes two inputs: 
// a string and a character. The function will count the number of times that 
// character appears in the string. The count is case insensitive.

// For example:

// countChar("fizzbuzz","z") => 4

// countChar("Fancy fifth fly aloof","f") => 5

// The character can be any alphanumeric character.

// Good luck.

function countChar(string, char) {
    let sameCaseString = string.toLowerCase() //makes the entire string lower case
    let sameCaseChar = char.toLowerCase() //makes the given character lower case also
    let array = sameCaseString.split('') //turns the string into an array
    let charArray = [] //empty array to put the chosen character in to later count the character
    for(let i = 0; i <= array.length; i++){ //iterates through the array
      if(array[i] === sameCaseChar){ //if element equals to given character
        charArray.push(array[i]) //push the given character to the empty array that was created
      } 
    }
    return charArray.length //since every element is the chose character, you can use this to count how many times the character was in the string
  }