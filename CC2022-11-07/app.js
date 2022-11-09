// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    let vowels = 'aeiou';
    let newString = ''
    for( let i = 0; i < string.length; i++){
      if(vowels.indexOf(string[i]) >= 0){
        newString += string[i].toUpperCase()
      }else{
        newString += string[i]
      }
    }
    return newString
  }


//Another Solution:

// const vowels = ["a", "e", "i", "o", "u"];
// const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');