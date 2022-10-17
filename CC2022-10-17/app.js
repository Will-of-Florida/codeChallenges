// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    let reverseArray = []
    for(let i = array.length -1; i > -1; i--){
      reverseArray.push(array[i])
    }
    return reverseArray
  }