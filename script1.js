function saveAndDisplayValue() {
    // Get the value of the text input fields
    let inputValue = document.getElementById("textInput").value;
    let inputValue2 = document.getElementById("textInput2").value;

    // Manipulate the input (e.g., convert user text to number)
    let manipulatedValue = Math.floor(inputValue);
    let manipulatedValue2 = Math.floor(inputValue2);

    let displayArea = document.getElementById("displayArea");

    // Initialize sums
    let sum1 = 0;
    let sum2 = 0;
    let minus = 0;

    // Calculate sum of multiples of manipulatedValue
    for (let i = 0; i < 1000; i = i+ manipulatedValue) {
        if (i % manipulatedValue == 0) {
            sum1 += i;
        }
    }

    // Calculate sum of multiples of manipulatedValue2
    for (let j = 0; j < 1000; j = j+ manipulatedValue2) {
        if (j % manipulatedValue2 == 0) {
            sum2 += j;
        }
    }

    // Calculate sum of common multiples and subtract from sum1 and sum2
    for (let k = 0; k < 1000; k = k + manipulatedValue2) {
       
        if (k % manipulatedValue == 0) {
            minus += k;
        }
    }

    // Calculate total sum
    let totalSum = sum1 + sum2 - minus;

    // Display the sum
    displayArea.textContent = "The sum of all multiples of " + manipulatedValue + " or " + manipulatedValue2 + " below 1000 (excluding common multiples) is: " + totalSum;
}

// Get the save button element
let saveButton = document.getElementById("saveButton");

// Add event listener to the button
saveButton.addEventListener("click", saveAndDisplayValue);
