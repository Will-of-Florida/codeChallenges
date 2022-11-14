// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n,xs){
    let sortedArray = xs.sort((a, b) => b - a)
    let array = []
    for(let i = 0; i <= n - 1; i++){
      array.push(sortedArray[i])
    }
  return array.sort((a, b) => a - b)
}