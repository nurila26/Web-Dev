// --- 1. Shared references in arrays ---
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert(fruits.length); // 4, because both refer to the same array

// --- 2. Array operations ---
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift()); // Shows "Jazz"
styles.unshift("Rap", "Reggae");
console.log(styles); // ["Rap", "Reggae", "Classics", "Rock-n-Roll"]

// --- 3. Calling a function inside an array ---
let arr = ["a", "b"];
arr.push(function() {
  alert(this);
});
arr[2](); // alerts the array itself

// --- 4. Sum input numbers ---
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Enter a number", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// --- 5. Maximal subarray sum ---
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    if (partialSum > maxSum) maxSum = partialSum;
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

// Testing examples:
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
