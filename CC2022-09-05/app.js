// Write a function that will accept two parameters: 
// variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

function typeValidation(variable, type) {
    if(typeof(variable) == type){
      return true;
    }else{
      return false;
    }
  }
  
  //The typeof operator returns a string indicating the type of the unevaluated operand.
  
  // Type	Result
  // Undefined:	"undefined"
  // Null:	"object" (see below)
  // Boolean:	"boolean"
  // Number:	"number"
  // BigInt:	"bigint"
  // String:	"string"
  // Symbol:	"symbol"
  // Function (implements [[Call]] in ECMA-262 terms; classes are functions as well):	"function"
  // Any other object:	"object"