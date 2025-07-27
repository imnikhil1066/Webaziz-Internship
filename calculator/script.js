const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let expression = "";

// Add click event to each button
buttons.forEach(button => {
  const value = button.getAttribute('data-value');

  button.addEventListener('click', () => {
    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

// Clear button
clearBtn.addEventListener('click', () => {
  expression = "";
  display.value = "";
});

// Equals button
equalsBtn.addEventListener('click', () => {
  try {
    expression = eval(expression).toString();
    display.value = expression;
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
});
