/* global gpal: true; */

/************************************************************************
 *
 * The Blue 'New Posts' Button
 *
 */
gpal.NewPostsButton = {

  /*
   * show new posts button
   */
  show: function() {
    var btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
    if (btn) {
      btn.dataset.gpalVisible = true;
    }
  },

  /*
   * hide new posts button
   */
  hide: function() {
    var btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
    if (btn) {
      btn.dataset.gpalVisible = false;
    }
  },

  /*
   * check whether new posts button is already processed or not
   * (return ture if not processed)
   */
  isNotProcessed: function() {
    var btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
    return btn && !btn.dataset.gpalProcessed;
  },

  /*
   *
   */
  markProcessed: function() {
    var btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
    if (btn) {
      btn.dataset.gpalProcessed = true;
    }
  }

};
