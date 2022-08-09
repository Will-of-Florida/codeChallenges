// ********************
// *** QUESTION ONE ***
// ********************
// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated 
// words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes 
// uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, 
// transform it and join back.

function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }


// ********************
// *** QUESTION TWO ***
// ********************
//   Filter range
//   importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements with values higher or equal to a and lower or 
// equal to b and return a result as an array.

// The function should not modify the array. It should return the 
// new array.  
//   For instance:  
//   let arr = [5, 3, 8, 1];  
//   let filtered = filterRange(arr, 1, 4);  
//   alert( filtered ); // 3,1 (matching values)  
//   alert( arr ); // 5,3,8,1 (not modified) 

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }


// ********************
// *** QUESTION THREE *
// ********************
// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array 
// arr and removes from it all values except those that are between 
// a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return 
// anything.

// For instance:

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }



// ********************
// *** QUESTION FOUR **
// ********************
// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// constructor function

function Calculator(){
    this.methods ={
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    };

    this.calculate = function(str){

        let split = str.split(' '),
        a = +split[0],
        operand = split[1],
        b = +split[2];

        if (!this.methods[operand] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
            return this.methods[operand](a, b);
          };

        this.addMethod = function(name, func) {
            this.methods[name] = func;
          };

}


// ********************
// *** QUESTION FIVE **
// ********************
// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)

alert( names );



// ********************
// *** QUESTION SIX **
// ********************
// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


