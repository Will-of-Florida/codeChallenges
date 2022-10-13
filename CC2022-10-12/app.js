// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
    let value = a + b
    if(typeof value === 'number'){
      return 'number'
    }else if(typeof value === 'string'){
      return 'string'
    }
  }