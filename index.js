function hasTargetSum(array, target) {
  let hasTarget = false;
  for (let i = 0; i < array.length; ++i) {
    let tempNum = array[i];
    for (let j = 0; j < array.length; ++j) {
      if (i !== j) {
        let sum = tempNum + array[j];
        if (sum === target) {
          hasTarget = true;
          break
        }
      }
    }
  }
  return hasTarget;
}

/* 
    The time complexity of my solution is quadratic O(n^2) because it
    must iterate through an array of n length n times as it tries all
    possible combinations.
*/

/* 
  Initialize a function that takes in an array and a target integer
  Initialize a match variable to false
  Use a nested for loop to add each element of array to all other elements
  and compare to target integer.
  If match found, toggle match variable to true and break from loop.
  Return match variable.
*/

/*
  My solution is to iterate through the array, and for each element in
  the array, add it to every other number in the array, comparing each
  sum to the target number. If any of the sums match the target number,
  the function will return "true", if not it will return "false".
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([100, 101, 102, 103, 104], 202));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
