// An instance updates the Markdown preview window
function preview(input,preview) {
        this.update = function () {
            // Call Showdown to parse the markdown-formatted text
            if (preview.innerHTML==="") {
                preview.innerHTML = "<p id='previewText' class='text-center'>Preview Window</p>";
            } else {
                preview.innerHTML = marked(input.value);
            }

            // Call MathJax to typeset the LaTeX equations
            MathJax.Hub.Typeset();
        };
    input.preview = this;
    this.update();
}

// An instance updates the teleprompter preview window
function prompt(input,preview) {
        this.update = function () {
            if (preview.innerHTML==="") {
                preview.innerHTML = "<p id='promptPreviewText' class='text-center'>Teleprompter Window</p>";
            } else {
                preview.innerHTML = marked(input.value);
            }

            // Call MathJax to typeset the LaTeX equations
            MathJax.Hub.Typeset();

            // Walk through the content and span-encapsulate everything. Rawr!
            walk(preview);
        };
    input.prompt = this;
    this.update();
}

// An instance updates the teleprompter window
function promptWindow(input,preview) {
        this.update = function () {
            // Call Showdown to parse the markdown-formatted text
            preview.innerHTML = marked(input.value);

            // Call MathJax to typeset the LaTeX equations
            MathJax.Hub.Typeset();

            // Walk through the content and span-encapsulate everything. Rawr!
            walk(preview);
        };
    input.promptWindow = this;
    this.update();
}

// Chain the input in the text-area to the preview boxes
var $ = function (id) { return document.getElementById(id); };
new preview($("text-input"), $("preview"));
new prompt($("text-input"), $("prompt"));