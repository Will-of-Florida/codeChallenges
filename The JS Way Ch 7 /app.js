//--QUESTION ONE--
// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let musketeers = ['Athos', 'Porthos', 'Aramis']
    for(let i = 0; i <= musketeers.length; i++){
        console.log([i])
    }

musketeers.push("D'Artagnan")

musketeers.forEach(musketeer => {
    console.log(musketeer)
})

musketeers.splice(0,1)

for (let musketeer of musketeers) {
   console.log(musketeer)
  }


//--QUESTION TWO--
// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];

let values = [3, 11, 7, 2, 9, 10]
  console.log(values.reduce((a,b) => a + b, 0))

  

//--QUESTION THREE--
// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
  
// const values = [3, 11, 7, 2, 9, 10];

let numbers = [3, 11, 7, 2, 9, 10]
    console.log(Math.max(...numbers)) 
//The (...) is called the spread operator or rest operator depending on context. 
//In this case it is the spread operator. It loops over the array



//--QUESTION FOUR--
// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

  while(1){ //while(1) means loop forever or loop while true
    let word = prompt('Please type a word. To stop, type "Stop"')
    if(word.toLowerCase() == 'stop') break //break the loop if stop is inputted
    console.log(word) 
  }
  