/************************************************************************
 *
 * Proxy to Load New Posts
 *
 */
gpal.LoaderProxy = {

  win: null,
  doc: null,
  MARK_PROCESSED: 'processed',
  CLASS: {
    POST:    'hi te'.split(' '),
    EDITBOX: 'Lf editable'.split(' ')
  },
  SELECTOR: {
    NEWPOSTS_BUTTON: '.d-k-l.b-c.b-c-T.fCd.PZa'
  },

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
      btn = this.doc.querySelector(this.SELECTOR.NEWPOSTS_BUTTON);
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
    var focus = this.doc.activeElement;
    try {
      // lol, it's terrible code!!!
      return (focus &&
              gpal.Utils.hasClasses(focus, this.CLASS.EDITBOX) &&
              gpal.Utils.hasClasses(focus.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode, this.CLASS.POST));
    }
    catch (error) {
      return false;
    }
  }

};


