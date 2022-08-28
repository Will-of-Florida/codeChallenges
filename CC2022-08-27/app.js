// Summation
// Write a program that finds the summation of every number from 1 to num. The number will 
// always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let array = [] //create an array
    for(let i = 0; i <= num; i++){
      array.push(i) //push the individual numbers from 0 to num into created array
    }
    let answer = array.reduce((a, b) => a + b) //reduce method to find the summation of the created array from 0 to num
    return answer
  }