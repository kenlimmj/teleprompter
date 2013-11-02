// An instance removes all flip classes from the prompt preview window (and the prompting popup, if open)
function flipReset () {
  // Remove all flip classes from the preview window
  var promptPreview = document.getElementById('prompt');
  removeClass(promptPreview,'flip-vertical');
  removeClass(promptPreview,'flip-horizontal');
  removeClass(promptPreview,'flip-mirror');

  // Check if the popupWindow is open and remove all flip classes from it too
  if (popupWindow && !popupWindow.closed) {
    var promptScreen = popupWindow.document.getElementById('screen');
    removeClass(promptScreen,'flip-vertical');
    removeClass(promptScreen,'flip-horizontal');
    removeClass(promptScreen,'flip-mirror');
  }
}

// An instance flips the prompt preview window (and the prompting popup, if open) horizontally
function flipHorz() {
  var promptPreview = document.getElementById('prompt');
  // Reset the flips to make sure we don't do funny gymnastics
  flipReset();

  // Add the flip-horizontal class to the preview window
  addClass(promptPreview,'flip-horizontal');

  // If the popupWindow is open, add the flip-horizontal class to it too
  if (popupWindow && !popupWindow.closed) {
    var promptScreen = popupWindow.document.getElementById('screen');
    addClass(promptScreen,'flip-horizontal');
  }
}

// An instance flips the prompt preview window (and the prompting popup, if open) vertically
function flipVert() {
  var promptPreview = document.getElementById('prompt');
  // Reset the flips to make sure we don't do funny gymnastics
  flipReset();

  // Add the flip-vertical class to the preview window
  addClass(promptPreview,'flip-vertical');

  // If the popupWindow is open, add the flip-vertical class to it too
  if (popupWindow && !popupWindow.closed) {
    var promptScreen = popupWindow.document.getElementById('screen');
    addClass(promptScreen,'flip-vertical');
  }
}

// An instance flips the prompt preview window (and the prompting popup, if open) mirrored
function flipMirror() {
  var promptPreview = document.getElementById('prompt');
  // Reset the flips to make sure we don't do funny gymnastics
  flipReset();

  // Add the flip-mirror class to the preview window
  addClass(promptPreview,'flip-mirror');

  // If the popupWindow is open, add the flip-mirror class to it too
  if (popupWindow && !popupWindow.closed) {
    var promptScreen = popupWindow.document.getElementById('screen');
    addClass(promptScreen,'flip-mirror');
  }
}