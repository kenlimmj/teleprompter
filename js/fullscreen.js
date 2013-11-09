document.getElementById('fullscreen').addEventListener("click", function() {
    var
          el = popupWindow.document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});