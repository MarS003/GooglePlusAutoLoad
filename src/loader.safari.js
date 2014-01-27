/* global gpal: true; */

/************************************************************************
 *
 * Loading New Posts (for Firefox add-on)
 *
 */
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
    var btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
    if (btn) {
      btn.click();
    }
  }

};
