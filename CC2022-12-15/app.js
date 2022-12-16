// Complete the solution so that it returns true if the first argument(string) passed in ends 
// with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let reversedStrArray = str.split('').reverse()
    let endingArray = ending.split('')
    let array = []
    
    for(let i = 0; i <= endingArray.length - 1; i++ ){
       array.push(reversedStrArray[i])
    }
    
     if(array.reverse().join('') === endingArray.join('')){
       return true
      }else{
       return false
     } 
  }