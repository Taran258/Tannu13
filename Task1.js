function calculateArea() {
    // Function to validate if the input is a positive number
    function isValidNumber(value) {
        return !isNaN(value) && value > 0;
    }

    // Function to prompt the user for a valid number with a given message
    function promptForValidNumber(message) {
        let number;
        do {
            number = parseFloat(prompt(message));
            if (!isValidNumber(number)) {
                console.log("Invalid input. Please enter a positive number.");
            }
        } while (!isValidNumber(number));
        return number;
    }

    // Get valid width and height from the user
    const width = promptForValidNumber("Enter a positive number for the width:");
    const height = promptForValidNumber("Enter a positive number for the height:");

    // Calculate the area
    const area = width * height;

    // Display the result
    console.log(`The area of the rectangle is ${area}`);
}

// Call the function to execute
calculateArea();
