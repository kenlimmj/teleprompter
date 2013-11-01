// An instance starts scrolling the prompting window
function startScroll(speed) {
    // Check if the window is already open before we start scrolling. If it is, update it. If it's not, open it.
    if (popupWindow && !popupWindow.closed) { popupWindow.focus }
    else { teleprompter(this.href,'Prompting Screen',window.innerWidth,window.innerHeight,'no'); }

    // Start the scroll
    pageScroll(speed);
}

// An instance scrolls the page downwards by a small interval
function pageScroll(speed) {
    popupWindow.scrollBy(0,1);

    // TODO: Scroll preview window

    // Delayed recursive call to keep scrolling till we hit the bottom
    scrolldelay = setTimeout(function() { pageScroll(speed);}, speed);
}

// An instance stops the page scrolling by removing the scroll delay
function stopScroll() {
    clearTimeout(scrolldelay);
}

// An instance updates the range display textbox with the range value
function updateTextInput(val) {
    switch(val) {
        case '0':
            document.getElementById('rangeDisplay').value="Fucking Fast";
            break;
        case '5':
            document.getElementById('rangeDisplay').value="Fast";
            break;
        case '10':
            document.getElementById('rangeDisplay').value="Standard";
            break;
        case '15':
            document.getElementById('rangeDisplay').value="Slow";
            break;
        case '20':
            document.getElementById('rangeDisplay').value="Fucking Slow";
            break;
    }

    if (popupWindow && !popupWindow.closed) {
        // Reset the scroll delay timer
        stopScroll();

        // Set the timer to the new value provided by the range input
        pageScroll(val);
    }
}

// An instance synchronized the scroll locations of the two input text-areas
function syncTextAreas (textarea1, textarea2) {
  textarea1.onscroll = function (evt) {
    textarea2.scrollTop = this.scrollTop;
  };
  textarea2.onscroll = function (evt) {
    textarea1.scrollTop = this.scrollTop;
  };
}