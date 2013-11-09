function updateWidthInput(val) {
  switch(val) {
      case '100':
          document.getElementById('widthDisplay').value="American";
          break;
      case '90':
          document.getElementById('widthDisplay').value="Really Fat";
          break;
      case '80':
          document.getElementById('widthDisplay').value="Fat";
          break;
      case '70':
          document.getElementById('widthDisplay').value="Standard";
          break;
      case '60':
          document.getElementById('widthDisplay').value="Thin";
          break;
      case '50':
          document.getElementById('widthDisplay').value="Anorexic";
          break;
      default:
          document.getElementById('widthDisplay').value=val;
          break;
  }

  if (popupWindow && !popupWindow.closed) {
    popupWindow.document.getElementById('screen').style.width = val+"vw";
  }
  document.getElementById('prompt').style.width = val+"%";

  // TODO: Synchronize the font-size on the popup window and preview window by getting to 60chars per line for both
}

