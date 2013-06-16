/************************************************************************
 *
 * Load New Posts
 *
 */
gpal.Loader = {

  win: null,
  doc: null,
  MARK_PROCESSED:  'processed',

  /*
   * initialize this object
   */
  init: function(win, doc) {
    this.win = win;
    this.doc = doc;
  },

  /*
   * try to load new posts
   */
  load: function() {

    var btn;

    // if document is at scroll top
    if (gpal.Utils.isScrollTop(this.doc)) {

      // hide 'New Posts' button
      gpal.NewPostsButton.hide();

      // do auto loading (only if comment box dosen't have focus)
      btn = this.doc.querySelector(gpal.SELECTOR.NEWPOSTS_BUTTON)
      if (btn && btn.dataset.gpal !== this.MARK_PROCESSED && !this._isCommentBoxHasFocus()) {
        btn.dataset.gpal = this.MARK_PROCESSED;
        gpal.LoaderProxy.load();
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
    var focus = this.doc.activeElement;
    try {
      // lol, it's terrible code!!!
      return (focus &&
              gpal.Utils.hasClasses(focus, gpal.CLASS.EDITBOX) &&
              gpal.Utils.hasClasses(focus.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode, gpal.CLASS.POST));
    }
    catch (error) {
      return false;
    }
  }

};


