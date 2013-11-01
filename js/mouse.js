function mouseSpeed(event) {
    var rolled = 0; // sensitivity adjustment

    if('wheelDelta' in event) {
        rolled = event.wheelDelta / 50; // all except firefox
    } else {
        //firefox
        rolled = 40 * event.detail / 50;
    }

    document.getElementById("rangeInput").value -= rolled;
    updateTextInput(document.getElementById("rangeInput").value);
}

function initMouse() {
    // IE Opera Chrome Safari
    document.addEventListener("mousewheel", mouseSpeed, false);
    // Firefox
    document.addEventListener("DOMMouseSpeed", mouseSpeed, false);
}

function updateTextInput(val) {
    switch(val) {
        case '0':
            document.getElementById('rangeDisplay').value="Fucking Fast";
            break;
        case '10':
            document.getElementById('rangeDisplay').value="Fast";
            break;
        case '20':
            document.getElementById('rangeDisplay').value="Standard";
            break;
        case '30':
            document.getElementById('rangeDisplay').value="Slow";
            break;
        case '40':
            document.getElementById('rangeDisplay').value="Fucking Slow";
            break;
    }
}