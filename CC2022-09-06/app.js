// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, 
// you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove (string) {
    let array = string.split('') //create an array out of the provided string
    let lastIndex = array[array.length - 1] //finds the last index of the array
    if(lastIndex === '!'){ //if the last index contains '!' 
      array.splice(array.length - 1, 1) //remove the last index that contains '!'
    }
    return array.join(''); //turn array back into string
  }