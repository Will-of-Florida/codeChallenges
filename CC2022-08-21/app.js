// Write a function to convert a name into initials. This kata strictly takes two words with one 
// space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let nameArray = name.split(''); //Turn the string into an array
    let findIndex = nameArray.indexOf(' ') + 1; //finds the index of the first letter of last name
    return nameArray[0].toUpperCase() + '.' + (name.charAt(findIndex)).toUpperCase(); //creates/returns the abbreviation w/ uppercase letters
  }

