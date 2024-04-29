const array1 = [];
const array2 = [];

function saveAndDisplayValue() {
    // Get the value of the text input fields
    let inputValue = document.getElementById("textInput").value;
    let inputValue2 = document.getElementById("textInput2").value;

    // Manipulate the input (e.g., convert user text to number)
    let manipulatedValue = Math.floor(inputValue);
    let manipulatedValue2 = Math.floor(inputValue2);

    let displayArea = document.getElementById("displayArea");

    displayArea.textContent = "For Loop:";
    for (let i = 1; i < 1000; i++) {
        array1[i] = manipulatedValue * i;
        array2[i] = manipulatedValue2 * i;

        // Display the current value of i in the display area
        displayArea.textContent += " " + array1[i] + "\tarray value: " + array2[i];
    }

    // Calculate the sum of the arrays
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (array1[i] % manipulatedValue2 == 0) {
            sum += array1[i];
        }
    }

    // Display the manipulated values and sum in the display area
    displayArea.textContent += " Your First number is: " + manipulatedValue + " Your second number is: " + manipulatedValue2 + " and the sum is: " + sum;
}

// Get the save button element
let saveButton = document.getElementById("saveButton");

// Add event listener to the button
saveButton.addEventListener("click", saveAndDisplayValue);
