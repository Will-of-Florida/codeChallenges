// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let i = arr.length;
    while(i--) (i+1) % 2 === 0 && (arr.splice(i,1)); //sytnax for splice: splice(start, deleteCount)
    return arr
  }