let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.value === 'Error') {
    display.value = '';  // Clear the display if it shows error
  }

  // Avoid multiple consecutive operators
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(display.value.slice(-1))) {
    return;  // Don't allow consecutive operators
  }

  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Evaluate the expression
    display.value = eval(display.value);
    
    // Check if the result is an infinity or invalid expression
    if (!isFinite(display.value) || display.value === 'NaN') {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    display.classList.add('error'); // Highlight error state
    display.value = 'Error'; // Display error message
  }
}
