// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }

//Answer to same question using the Math.sign() function

function makeNegative(num) {
    if(Math.sign(num) === -1){
      return num
    }else if(Math.sign(num) === 1){
      return num * -1
    }else{
      return 0
    }
  }

//The Math.sign() function returns either a positive or negative +/- 1, 
//indicating the sign of a number passed into the argument