function saveAndDisplayValue() {
    // Get the value of the text input field
    let inputValue = document.getElementById("textInput").value;

    // Manipulate the input (e.g., convert user text to number)
    let manipulatedValue = Math.floor(inputValue);

    let displayArea = document.getElementById("displayArea");

    // Initialize variables
    let fibbo = [1, 2];
    let sum = 0;

    // Calculate sum of even-valued terms of Fibonacci sequence not exceeding manipulatedValue
    let i = 1;
    while (fibbo[i] <= manipulatedValue) {
        if (fibbo[i] % 2 === 0) {
            sum += fibbo[i];
        }
        fibbo.push(fibbo[i - 1] + fibbo[i]);
        i++;
    }
    
    // Display the sum
    displayArea.textContent = "Your Fibonacci even-valued terms sum: " + sum;
}

// Get the save button element
let saveButton = document.getElementById("saveButton");



// Add event listener to the button


saveButton.addEventListener("click", saveAndDisplayValue);
