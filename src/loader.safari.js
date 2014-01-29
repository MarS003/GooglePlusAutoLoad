var gpal = gpal || {};

/**************************************************************************************
 *
 * Loading New Posts (for Safari Extension)
 *
 *************************************************************************************/
gpal.Loader = {

  /*
   * initialize this object
   */
  init: function() {
  },

  /*
   * do auto loading
   */
  load: function() {

    // if overlay frame is opened
    var frame = document.querySelector(gpal.SELECTOR.OVERLAY_FRAME);
    if (frame) {
      var observer = new MutationObserver(function() {
        if (!document.querySelector(gpal.SELECTOR.OVERLAY_FRAME)) {
          // retry to load
          gpal.LoaderProxy.load();
        }
      });
      observer.observe(frame, {attributes: true, attributeFilter: ['aria-hidden']});
      return false;
    }

    // if no-opverlay frame is opened
    else {
      var btn = document.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
      if (btn) {
        btn.click();
      }
      return true;
    }
  }

};
