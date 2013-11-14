/************************************************************************
 *
 * Observe Some Events
 *
 */
gpal.Observer = {


  /*
   * begin to observe events
   */
  run: function() {

    var observer, self = this;
    if (!gpal.dom.pane) {
      return;
    }

    // observe node tree mutation
    observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var i = mutation.addedNodes ? mutation.addedNodes.length : 0, node;
        while (i--) {
          node = mutation.addedNodes[i];
          if (node.parentNode && gpal.Utils.hasClasses(node, gpal.CLASS.RELOAD_BUTTON)) {
            self._onNewPosts();
          }
        }
      });
    });
    observer.observe(gpal.dom.pane, {childList: true, subtree: true});

    // listen scroll event
    gpal.win.addEventListener('scroll', function(event) {
      if (gpal.Utils.isScrollTop()) {
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


