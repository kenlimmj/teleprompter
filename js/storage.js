// Initialize some helper variables
var editor = document.getElementById("text-input");
var timer = 0;

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

// An instance updates the preview windows after a specified delay
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