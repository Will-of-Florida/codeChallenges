// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and 
// subtract this from the total of the string integers.


// Return as a number.


    function divCon(x){
        let numberArray = [] //empty array to put the integer numbers into
        let stringArray = [] //empty array to put the string numbers into
        for(let i = 0; i <= x.length - 1; i++){ //iterate through array x
        if(x[i] !== String(x[i])){ //if element does NOT equal a string number; push to numberArray
          numberArray.push(x[i])
        }else if(x[i] === String(x[i])){ //if element does equal a string number; push to stringArray
          stringArray.push(Number(x[i])) //convert the string number into an integer for proper addition later
        }
        } 
        let numberSum = numberArray.reduce((a, b) => a + b, 0) //add all the elements in numberArray together
        let stringSum = stringArray.reduce((a, b) => a + b, 0) //add all the elements in stringArray together
        return numberSum - stringSum //return the difference 
      }
    