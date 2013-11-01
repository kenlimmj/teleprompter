// An instance recursively walks through the input invoking doReplace at every node
function walk(root) {
    if (root.nodeType == 3) {
        doReplace(root);
        return;
    }
    var children = root.childNodes;
    for (var i = children.length - 1 ; i >= 0 ; i--) {
        walk(children[i]);
    }
}

// An instance uses Regex Matching to put all words in a span tag
function doReplace(text) {
    var div = document.createElement("div");
    div.innerHTML = text.nodeValue.replace(/(\w+|\S+\S?\S?)/g, "<span class='flip'>$1</span>");
    var parent = text.parentNode;
    var children = div.childNodes;
    for (var i = children.length - 1 ; i >= 0 ; i--) {
        parent.insertBefore(children[i], text.nextSibling);
    }
    parent.removeChild(text);
}