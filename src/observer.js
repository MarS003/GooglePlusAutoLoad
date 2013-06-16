/************************************************************************
 *
 * Observe Some Events
 *
 */
gpal.Observer = {

  win: null,
  doc: null,
  dom: {
    pane: null
  },

  /*
   * initialize this object
   */
  init: function(win, doc) {
    this.win = win;
    this.doc = doc;
    this.dom.pane = doc.getElementById(gpal.ID.CONTENT_PANE);
  },

  /*
   * begin to observe events
   */
  run: function() {

    var observer, self = this;
    if (!this.dom.pane) {
      return;
    }

    // observe node tree mutation
    observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var i = mutation.addedNodes.length, node;
        while (i--) {
          node = mutation.addedNodes[i];
          if (gpal.Utils.hasClasses(node, gpal.CLASS.NEWPOSTS_BUTTON)) {
            self._onNewPosts();
          }
        }
      });
    });
    observer.observe(this.dom.pane, {childList: true, subtree: true});

    // listen scroll event
    this.win.addEventListener('scroll', function(event) {
      if (gpal.Utils.isScrollTop(self.doc)) {
        self._onScrollTop();
      }
    });
  },

  /*
   * called when new posts available
   */
  _onNewPosts: function() {
    gpal.Loader.load();
  },

  /*
   * called when scroll on top
   */
  _onScrollTop: function() {
    gpal.Loader.load();
  }

};


