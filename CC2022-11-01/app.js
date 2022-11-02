// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and 
// non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


function vowelOne(s){
    let sameCase = s.toLowerCase() //same case to allow us to only have to look for aeiou instead of aeiou and AEIOU
    let stringArray = sameCase.split('') //make the string an array
    let array = [] //create an empty array to store 1 or 0 into depending on whether index is vowel or not
    for(let i = 0; i < stringArray.length; i++){
      if(stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o' || stringArray[i] === 'u'){
        array.push(1)
      }else{
        array.push(0)
      }
    }return array.join('') //turn back into a string of 1s and 0s depending on whether the index was a vowel or not
  }