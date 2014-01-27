/* global gpal: true; */

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

    if (!gpal.dom.pane) {
      return;
    }

    // observe adding reload button node
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var i = mutation.addedNodes ? mutation.addedNodes.length : 0;
        while (i--) {
          var node = mutation.addedNodes[i];
          if (gpal.Utils.hasClasses(node, gpal.CLASS.RELOAD_BUTTON)) {
            gpal.Observer._onNewPosts();
          }
        }
      });
    });
    observer.observe(gpal.dom.pane, {childList: true, subtree: true});

    // observe scrolling to top
    gpal.win.addEventListener('scroll', function() {
      if (gpal.Utils.isScrollTop()) {
        gpal.Observer._onScrollTop();
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
