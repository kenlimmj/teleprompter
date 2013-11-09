// An instance synchronizes the scroll locations of two DOM elements
// This is a bidirectional synchronization, i.e. scrolling either element updates the scroll position of the other
// Precondition: the input DOM elements must be scrollable
function syncTextAreas (textarea1, textarea2) {
  textarea1.onscroll = function (evt) {
    textarea2.scrollTop = this.scrollTop;
  };
  textarea2.onscroll = function (evt) {
    textarea1.scrollTop = this.scrollTop;
  };
}

// An instance starts scrolling the prompting window
// Precondition: The input argument "speed" must be a positive integer
function startScroll(speed) {
    // Check if the window is already open before we start scrolling. If it is, update it. If it's not, open it.
    if (popupWindow && !popupWindow.closed) { popupWindow.focus }
    else { teleprompter(this.href,'Prompting Screen',window.innerWidth,window.innerHeight,'no'); }

    // Start the scroll
    pageScroll(speed);
}

// An instance scrolls the page downwards by a small interval
// This function recursively calls itself with a delay to simulate different scroll speeds
// We use the inbuilt scrollBy function with a very small scroll interval (1px) to keep the scrolling smooth
// Precondition: A popup window with handle "popupWindow" is open. The input argument "speed" must be a positive integer
function pageScroll(speed) {
    // Scroll the popup window by 1 pixel vertically
    popupWindow.scrollBy(0,1);

    // Calculate a scaling factor for the scroll to account for the different in size between the preview and prompting window
    var scaleFactor = (document.getElementById('promptPreviewWrapper').offsetHeight) / (popupWindow.innerHeight);

    // Synchronize the scroll locations for both the prompting window and preview window
    document.getElementById('promptPreviewWrapper').scrollTop = (popupWindow.document.body.scrollTop) * scaleFactor;

    // Delayed recursive call to keep scrolling till we hit the bottom
    scrolldelay = setTimeout(function() { pageScroll(speed);}, speed);
}

// An instance stops the page scrolling by removing the scroll delay
function stopScroll() {
    clearTimeout(scrolldelay);
}

// An instance checks to see if the window is scrolling and stops scrolling if it is. Otherwise it starts scrolling.
// TODO: Find some way to replace scrolldelay for something we can use to detect if scrolling is happening
function toggleScroll() {
    // If there's no scroll delay set it means we're not scrolling, so we start the scroll
    if (scrolldelay === 0) { startScroll(); }
    // Otherwise, it means that we're currently scrolling, so we stop the scroll
    else { stopScroll(); }
}

// An instance updates the range display textbox with a textual representation of the range value
// Displays text ranging from "Fucking Fast", "Fast", "Standard", "Slow", and "Fucking Slow" depending on the scroll speed
// If the value is one we've accounted for, falls back by displaying the value itself
// Precondition: The input argument is an integer with range [0,40]
function updateSpeedInput(val) {
    switch(val) {
        case '0':
            document.getElementById('speedDisplay').value="Fucking Fast";
            break;
        case '10':
            document.getElementById('speedDisplay').value="Fast";
            break;
        case '20':
            document.getElementById('speedDisplay').value="Standard";
            break;
        case '30':
            document.getElementById('speedDisplay').value="Slow";
            break;
        case '40':
            document.getElementById('speedDisplay').value="Fucking Slow";
            break;
        default:
            document.getElementById('speedDisplay').value=val;
            break;
    }

    // Execute only if the popup window is open
    if (popupWindow && !popupWindow.closed) {
        // Reset the scroll delay timer
        // If we don't do this, the timer value will just add to itself rather than change as we expect it to
        stopScroll();

        // Set the timer to the new value provided by the range input
        pageScroll(val);
    }
}