// An instance checks if an element has a class
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// An instance checks if an element has a class and adds it if only it doesn't
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

// An instance checks if an element has a class and removes it only if it does
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}