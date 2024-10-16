const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultElement = document.getElementById("result");  

const errorElement = document.getElementById("error");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  let selectedOperation;

  // Check if an operation is selected
  if (!document.querySelector('input[name="operation"]:checked')) {
    errorElement.textContent = "Please select an operation.";
    return;
  } else {
    selectedOperation = document.querySelector('input[name="operation"]:checked').value;
  }

  // Check if both inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    errorElement.textContent = "Please enter valid numbers.";
    return;
  }

  // Perform the calculation based on the selected operation
  let result;
  switch (selectedOperation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;  

    case "divide":
      if (num2   === 0) {
        errorElement.textContent = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      errorElement.textContent = "Invalid operation selected.";  

      return;
  }

  // Display the result and clear any previous errors
  resultElement.value = result;
  errorElement.textContent = "";
});

// Clear the error message when the user starts typing in either input field
num1Input.addEventListener("input", () => {
  errorElement.textContent = "";
});
num2Input.addEventListener("input", () => {
  errorElement.textContent = "";
});