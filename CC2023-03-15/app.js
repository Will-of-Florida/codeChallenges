// Write a method that takes one argument as name and then greets that name, capitalized and ends with an 
// exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
  
    if(name === name.toLowerCase()){
        let caseCorrectName = name.charAt(0).toUpperCase() + name.slice(1)
        return 'Hello ' + caseCorrectName +'!'
    }else if(name === name.toUpperCase()){
      let caseCorrectName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      return 'Hello ' + caseCorrectName +'!'
    }else{
      return 'Hello ' + name +'!' 
    }
  };