// Test Results:

// Example Tests

// betterThanAverage([2, 3], 5) should return True

// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True

// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False

// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False

// betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False

 

function betterThanAverage(classPoints, yourPoints) {

  let classAverage = classPoints.reduce((a, b) => a + b, yourPoints) / (classPoints.length + 1);

  if(yourPoints > classAverage){

    return true

  }else{

    return false

  }

}