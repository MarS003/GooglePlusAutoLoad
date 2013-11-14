/************************************************************************
 *
 * Proxy to Load New Posts
 *
 */
gpal.LoaderProxy = {

  MARK_PROCESSED: 'processed',

  /*
   * try to load new posts
   */
  load: function() {

    var btn;

    // if document is at scroll top
    if (gpal.Utils.isScrollTop()) {

      // hide 'New Posts' button
      gpal.NewPostsButton.hide();

      // do auto loading (only if comment box dosen't have focus)
      btn = gpal.doc.querySelector(gpal.SELECTOR.RELOAD_BUTTON);
      if (btn && btn.dataset.gpal !== this.MARK_PROCESSED && !this._isCommentBoxHasFocus()) {
        btn.dataset.gpal = this.MARK_PROCESSED;
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
      return (focus &&
              gpal.Utils.hasClasses(focus, ['editable']) &&
              !focus.parentNode.parentNode.id.search(/\:.+\.editor/));
    }
    catch (error) {
      return false;
    }
  }

};


