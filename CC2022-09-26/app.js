// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let array = s.split(' ').sort((a, b) => a.length - b.length)
    return array[0].length
  }

  //Turns the string of words into an array. Each word is its own index within the array 
  //by using s.split(' ')

  //The .sort((a, b) => a.length - b.length) sorts the indexes by length smallest to largest

  //The first index will contain the smallest string. To get size of string use array[0].length