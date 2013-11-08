// Initialize some helper variables
var editor = document.getElementById("text-input");
var speedInput = document.getElementById("speedInput");
var widthInput = document.getElementById("widthInput");
var timer = 0;

// TODO: Encapsulate these so they run only on document load
// Check if a script was previously written to localStorage and load it
if (window.localStorage["TextEditorData"]) {
    editor.value = window.localStorage["TextEditorData"];

    // Render the contents
    editor.preview.update();
    editor.prompt.update();

    MathJax.Hub.Typeset();
}

// Write the textarea to localStorage everytime a key is pressed
editor.addEventListener("input", function() {
    updateState(500);
});

// An instance is a debouncer that updates the preview windows after a specified delay
function updateState(delay) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        window.localStorage["TextEditorData"] = editor.value;

        // Send updates to the preview windows
        editor.preview.update();
        editor.prompt.update();

        timer = 0;
    }, delay);
}

// TODO: Encapsulate these so they run only on document load
// Check if the speed and width values were previously written to localStorage and load them
if (window.localStorage["widthInputData"]) {
    widthInput.value = window.localStorage["widthInputData"];
}
if (window.localStorage["speedInputData"]) {
    speedInput.value = window.localStorage["speedInputData"];
}

// Write the width value to localStorage everytime it is changed
widthInput.addEventListener("input",function() {
    window.localStorage["widthInputData"] = widthInput.value;
});

// Write the speed value to localStorage everytime it is changed
speedInput.addEventListener("input",function() {
    window.localStorage["speedInputData"] = speedInput.value;
});