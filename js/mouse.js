// An instance detects the direction of mouse-wheel scroll anywhere and scrolls the popupWindow accordingly
function mouseSpeed(e) {
    // Sensitivity tweak
    var scrollAdjust = 3;

    // Initialize a cross-browser friendly window event handle
    var e = window.event || e;

    // Detect the change in the scroll wheel. Return -1 on scroll upwards, and +1 on scroll downwards
    var delta = Math.min(1, Math.max(-1, (e.wheelDelta || -e.detail)));

    // Scroll the popup in the correct direction, factoring in sensitivity adjustment
    popupWindow.scrollBy(0,-scrollAdjust*delta);
}

// An instance adds a cross-browser event listener to monitor mouse-wheel scrolls
function initMouse() {
    // IE9, Opera, Chrome, Safari
    document.addEventListener("mousewheel",mouseSpeed,false);

    // Firefox
    document.addEventListener("DOMMouseSpeed",mouseSpeed,false);
}