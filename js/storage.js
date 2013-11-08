// Initialize some helper variables
var editor = document.getElementById("text-input");
var speedInput = document.getElementById("speedInput");
var widthInput = document.getElementById("widthInput");
var timer = 0;

// An instance is a debouncer that updates the preview windows after a specified delay
function updateState(delay) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        // Write the text inside the textarea to the browser cache
        window.localStorage["TextEditorData"] = editor.value;

        // Send updates to the preview windows
        editor.preview.update();
        editor.prompt.update();

        // Reset the timer because we've just saved the information
        timer = 0;
    }, delay);
}

// Load data from the browser cache when the page is loaded
window.onload = function() {
    // Check if the width was previously set and load it
    if (window.localStorage["widthInputData"]) { widthInput.value = window.localStorage["widthInputData"]; };

    // Check if the speed was previously set and load it
    if (window.localStorage["speedInputData"]) { speedInput.value = window.localStorage["speedInputData"]; };

    // Check if the flip state was previously set and load it
    // if (window.localStorage["flipState"]) { flipInput.value = window.localStorage["flipState"]; };

    // Check if a script was previously written to localStorage and load it
    if (window.localStorage["TextEditorData"]) {
        // Read the browser cache and pull out the textarea information
        editor.value = window.localStorage["TextEditorData"];

        // Render the contents to the preview and prompting window
        editor.preview.update();
        editor.prompt.update();

        // Parse and render all the LaTeX commands
        MathJax.Hub.Typeset();
    }
}

// Write the width value to localStorage everytime it is changed
widthInput.addEventListener("input",function() { window.localStorage["widthInputData"] = widthInput.value; });

// Write the speed value to localStorage everytime it is changed
speedInput.addEventListener("input",function() { window.localStorage["speedInputData"] = speedInput.value; });

// Write the flip state to localStorage everytime it is changed
// flipInput.addEventListener("input",function() { window.localStorage["flipState"] = flipInput.value; });

// Write the textarea to localStorage everytime a key is pressed
editor.addEventListener("input", function() {
    // Use a 500ms delay because there's no way we're typing a legal word and closing a window within half a second
    updateState(500);
});