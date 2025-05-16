const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;    
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (display.value.includes("%")) {
        display.value = display.value.replace(/(\d+)%/g, (match, number) => number / 100);
    }
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }    
}

function toggleSign() {   
    if (display.value !== "") {        
        display.value = display.value.startsWith("-")
            ? display.value.slice(1)  // Remove '-' if already negative
            : "-" + display.value;    // Add '-' if positive
    }
}

function convertToPercentage() {   
    if (display.value !== "") {
        // Convert the value to percentage
        display.value = display.value + "%";
    }
}