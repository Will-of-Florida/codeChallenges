// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a 
// V A P O R W A V E sentence. a V A P O R W A V E 
// sentence converts all the letters into uppercase, and 
// adds 2 spaces between each letter (or special character) 
// to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples

// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporcode(string) {
    let array = string.replace(/\s/g,'').split('')
    return array.join('  ').toUpperCase()
 }
  
   
// Removed all spaces before splitting into an array by using .replace(/\s/g,'')
// \s is the regex for "whitespace", and g is the "global" flag, 
// meaning match ALL \s (whitespaces).

// When joining the created array back to a string,created double spacing 
// by double spacing inbetween the '' such as ('  ')

// Then made letters uppercase with .toUpperCase() as the instructions requested.