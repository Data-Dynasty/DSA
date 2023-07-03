// Object to store the results of previous function calls
let factorialResults = {};

function factorial(n) {
  // Check if the result is already stored
  if (n in factorialResults) {
    return factorialResults[n];
  }

  // Calculate the factorial
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  // Store the result
  factorialResults[n] = result;

  return result;
}
