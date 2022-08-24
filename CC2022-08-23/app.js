// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    let array = str.split(',') //converts string into an array without the commas
    let upperCaseString = array.toString('').toUpperCase() //converts array into a string so toUpperCase method can be used to capitalize each letter
    return upperCaseString
  }