// You can print your name on a billboard ad. Find out how much it will cost you. Each character has 
// a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 
// (Space counts as a character).

function billboard(name, price = 30){
    let array = name.split('') //split the string into an array since number of indexes will equal number of letters in the string
    let finalPrice = array.length //creating a variable that holds the number of characters/indexes in the string
    for(let i = 1; i < price; i++){
      finalPrice += array.length //multiplication is repeated addition
    }
    return finalPrice  
  } 
  
  // Answer using the multiplication * operator:
  // 
  // function billboard(name, price = 30){
  //   let array = name.split('')
  //   return array.length * price 
  // }