function saveAndDisplayValue() {
    // Get the value of the text input field
    let inputValue = document.getElementById("textInput").value;

    // Manipulate the input (e.g., convert user text to number)
    let manipulatedValue = Math.floor(parseInt(inputValue)); // Parse input as integer

    let displayArea = document.getElementById("displayArea");
    let primeFactor = [];
    let prime = 2; // Start with the first prime number
    let i = 0;




    // Use a while loop instead of a do-while loop for better control
    while (manipulatedValue > 1) { // Continue until the manipulatedValue becomes 1
        if (manipulatedValue % prime === 0) { // Check if prime is a factor of manipulatedValue
            primeFactor[i] = prime;
            manipulatedValue = manipulatedValue/prime; // Divide manipulatedValue by prime
            i++;
        } else {
            prime++; // Move to the next number
        }
    }


    

    // Display the largest prime factor
    let largestPrimeFactor = primeFactor.pop();

    displayArea.textContent = "The largest prime factor is: " + largestPrimeFactor;
}

// Get the save button element
let saveButton = document.getElementById("saveButton");

// Add event listener to the button
saveButton.addEventListener("click", saveAndDisplayValue);
