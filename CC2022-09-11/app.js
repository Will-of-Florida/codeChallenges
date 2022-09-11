// I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// *****************
// **Provided Code**
// *****************
// function arrayPlusArray(arr1, arr2) {
//     return arr1 + arr2; //something went wrong
//   }

function arrayPlusArray(arr1, arr2) {
    let sumOfArr1 = arr1.reduce((a, b) => a + b, 0) //sums all the values in arr1 
    let sumOfArr2 = arr2.reduce((a, b) => a + b, 0) //sums all the values in arr2
    return sumOfArr1 + sumOfArr2; //returns the total sum of arr1 + total sum of arr2
  }

  //The original code provided concatenates the indexes of the two arrays together 