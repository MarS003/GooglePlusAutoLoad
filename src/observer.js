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
  ID: {
    CONTENT_PANE: 'contentPane'
  },
  CLASS: {
    NEWPOSTS_BUTTON: 'd-k-l b-c b-c-T fCd PZa'.split(' ')
  },

  /*
   * initialize this object
   */
  init: function(win, doc) {
    this.win = win;
    this.doc = doc;
    this.dom.pane = doc.getElementById(this.ID.CONTENT_PANE);
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
        var i = mutation.addedNodes ? mutation.addedNodes.length : 0, node;
        while (i--) {
          node = mutation.addedNodes[i];
          if (node.parentNode && gpal.Utils.hasClasses(node, self.CLASS.NEWPOSTS_BUTTON)) {
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
    gpal.LoaderProxy.load();
  },

  /*
   * called when scroll on top
   */
  _onScrollTop: function() {
    gpal.LoaderProxy.load();
  }

};


