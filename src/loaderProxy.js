/* global gpal: true; */

/************************************************************************
 *
 * Proxy to Load New Posts
 *
 */
gpal.LoaderProxy = {

  /*
   * try to load new posts
   */
  load: function() {

    // if document is at scroll top
    if (gpal.Utils.isScrollTop()) {

      // hide 'New Posts' button
      gpal.NewPostsButton.hide();

      // if not yet processed, and comment box dosen't have focus
      var btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
      if (btn && !btn.dataset.gpalProcessed && !this._isCommentBoxHasFocus()) {
        btn.dataset.gpalProcessed = true;
        // do auto loading
        gpal.Loader.load();
      }
    }
    // if document is not at scroll top
    else {
      // show 'New Posts' button
      gpal.NewPostsButton.show();
    }
  },

  /*
   * check whether comment box has focues or not
   */
  _isCommentBoxHasFocus: function() {
    var focus = gpal.doc.activeElement;
    try {
      return (focus && gpal.Utils.hasClasses(focus, ['editable']) && !focus.parentNode.parentNode.id.search(/\:.+\.editor/));
    }
    catch (error) {
      return false;
    }
  }

};
