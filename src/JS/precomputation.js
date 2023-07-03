// Object to store the results of previous function calls
let memo = {};

// Function to calculate the factorial of a number using precomputation
function factorial(n) {
  if (n in memo) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  memo[n] = n * factorial(n - 1);
  return memo[n];
}

// Implement the problems mentioned by the user here
// Each problem will be implemented as a separate function with detailed comments explaining the steps and logic
