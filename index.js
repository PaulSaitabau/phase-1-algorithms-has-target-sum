function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};
 
  for (const number of array) {
     const complement = target - number;
     if (complement in seenNumbers) return true;
     seenNumbers[number] = true;
  }
 
  return false;

 }
 
 /* 
  Write the Big O time complexity of your function here
  Runtime: O(n)
 */
 
 /* 
  Add your pseudocode here
  Pseudocode:
   1. Initialize an empty object `seenNumbers` to keep track of numbers we've already seen.
   2. Iterate through each number in the array.
   3. If we reach the end of the array without finding a complement, return false.
 */
 
 /*
  Add written explanation of your solution here
  This function checks if there are two numbers in the array that add up to the target sum.
  It uses a hash map to keep track of numbers seen so far. For each number, it calculates its complement (the difference between the target and the current number).
  If the complement is already in the map, it means we've found two numbers that add up to the target, and we return true.
  If we go through the entire array without finding a complement, we return false, indicating no such pair exists.
  The time complexity is O(n) because we perform a single pass through the array.
 */
 
 // You can run `node index.js` to view these console logs
 if (require.main === module) {
  // add your own custom tests in here
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
 