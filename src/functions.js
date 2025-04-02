
export function getNumbers() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerText = "Please enter both numbers.";
      return null;
  }
  return [num1, num2];
}

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// export function multiply(a, b) {
//   return a * b;
// }

// export function divide(a, b) {
//   return b !== 0 ? a / b : "Cannot divide by zero";
// }

export function displayResult(operation) {
  const numbers = getNumbers();
  if (!numbers) return;
  document.getElementById('result').innerText = "Result: " + operation(numbers[0], numbers[1]);
}