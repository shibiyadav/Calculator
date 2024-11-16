// Append a value to the display, adding implicit multiplication if needed
function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    // Add a multiplication symbol if a number is followed by an opening parenthesis
    if (/\d$/.test(currentValue) && value === '(') {
        display.value += '*' + value;
    } 
    // Add a multiplication symbol if a closing parenthesis is followed by a number
    else if (currentValue.endsWith(')') && /\d/.test(value)) {
        display.value += '*' + value;
    } 
    // Append value normally otherwise
    else {
        display.value += value;
    }
}

// Clear the entire display
function clearDisplay() {
    document.getElementById('display').value = ''; 
}

// Delete the last character on the display
function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Handle percentage calculations and evaluate the expression
        const result = eval(display.value.replace(/%/g, '*0.01'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
