/* global gpal: true; */

/**************************************************************************************
 *
 * Loading New Posts (for Safari extension)
 *
 *************************************************************************************/
(function(doc){

  //
  // initialize this object
  //
  var init = function() {
  };

  //
  // do auto loading
  //
  var load = function() {

    // if overlay frame is opened
    var frame = doc.querySelector(gpal.SELECTOR.OVERLAY_FRAME);
    if (frame) {
      var observer = new MutationObserver(function() {
        if (!doc.querySelector(gpal.SELECTOR.OVERLAY_FRAME)) {
          // retry to load
          gpal.autoLoad();
        }
      });
      observer.observe(frame, {attributes: true, attributeFilter: ["aria-hidden"]});
      return false;
    }

    // if no-opverlay frame is opened
    else {
      var btn = doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
      if (btn) {
        btn.click();
      }
      return true;
    }
  };

  //
  // exports
  //
  var global = this;
  global.gpal = global.gpal || {};
  global.gpal.Loader = {
    init: init,
    load: load
  };

}(document));
