// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    return total1(x) - total2(x)
  }
  
  function total1(x) {
    let nums = []
    for(let i = 0; i < x.length; i++) {
      nums.push(x.charCodeAt(i))
    }
  
    let total = nums
      .join('')
      .split('')
      .map(el => Number(el))
      .reduce((a,b) => a + b)
    
    return total
  }
  
  function total2(x) {
    let nums = []
    for(let i = 0; i < x.length; i++) {
      nums.push(x.charCodeAt(i))
    }
    
    const numbers = nums
      .join('')
      .split('')
      .map(el => Number(el))
      .map(el => {
        if(el === 7) {
          return 1
        } else return el
      })
      .reduce((a,b) => a + b)
      
    return numbers
  }