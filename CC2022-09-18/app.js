// Write function RemoveExclamationMarks which removes all exclamation marks from a 
// given string.

function removeExclamationMarks(s) {
    let array = s.split('') //convert the string into an array
    let marksRemoved = [] //create an empty array to hold values that are not '!'
    if(array.includes('!')){ //checks to see if array has '!' 
        for(let i = 0; i <= array.length; i++){ //iterates through each element
          if(array[i] !== '!'){
            marksRemoved.push(array[i]) //if element is not '!' then push element into marksRemoved array
          }
        }
      return marksRemoved.join('') //turns array back into string without the '!'
      } else{
        return array.join('') //return this if there is not a '!' in the original string
      }
  }
  