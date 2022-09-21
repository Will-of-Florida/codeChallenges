// You are to write a function that takes a string as its first parameter. This string 
// will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find 
// the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third 
// provided parameter, which will also be an integer. You are additionally required to 
// add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5)

// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.

function modifyMultiply (str,loc,num) {
    let array = str.split(' ')
    return Array(num).fill(array[loc]).join('-')
  }
  
   
  
  //Example: "This is a string"
  
  //str.split(' ') creates an array out of the string with each index having its own word/string. Example: [This, is, a, string]
  
  //Array(num) creates an array with "num" amount of empty slots. Example: Array(5) creates an array with 5 empty elements
  
  //array[loc] points to the desired index that contains the desired string: Example: array[3] points the third index which will be 'string' in our example
  
  //.fill(array[loc]) adds the desired string to the Array 'num' amount of times: Example: Array(string, string, string, string, string)
  
  //.join ('-') turns the array back into a string with the desired syntax of using '-' to space each string. Example: 'string-string-string-string-string'