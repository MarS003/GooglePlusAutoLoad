/* global gpal: true; */

(function(win, doc) {

  // only top frame can run this script
  if (win.top !== win) {
    return;
  }

  var dom      = {pane: doc.getElementById('contentPane')};
  var SELECTOR = {};
  var CLASS    = {};

  //
  // .tke.oDc
  //   .d-k-l.b-c.b-c-U.JFd.JZ[role="button"]  <= reload button
  //     .b1b
  //       (text: N new)
  //   .d-k-l.b-c.b-c-U.Yic.JZ[role="button"]  <= resume button
  //     .b1b
  //       (text: Resume)
  //   .F4  <= bookmark icon
  //
  SELECTOR.RELOAD_BUTTON = '.d-k-l.b-c.b-c-U.JFd.JZ';
  CLASS.RELOAD_BUTTON    = ['d-k-l', 'b-c', 'b-c-U', 'JFd', 'JZ'];

  //
  // .gb_zb.gb_Hb.gb_j
  //   #gbsfw.gb_s
  //     iframe[aria-hidden]  <= for notification area and new post
  //   #gbwa.gb_q.gb_Fa.gb_j
  //     div[aria-hidden]     <= for google application palette
  //   .gb_ea.gb_Fa.gb_Hb.gb_j
  //     div[aria-hidden]     <= for account palette
  //
  SELECTOR.OVERLAY_FRAME = '.gb_zb.gb_Hb.gb_j [aria-hidden="false"]';


  //
  // check whether element has classes or not
  //
  var hasClasses = function(elem, classList) {

    if (!elem || !elem.classList) {
      return false;
    }

    var i = classList.length;
    while (i--) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  //
  // check whether scroll position is at top or not
  //
  var isScrollTop = function() {
    return (doc.body.scrollTop || doc.documentElement.scrollTop) <= 100;
  };

  /**************************************************************************************
   *
   * the blue new posts button
   *
   *************************************************************************************/
  var newPostsButton = {

    /*
     * show new posts button
     */
    show: function() {
      var btn = doc.querySelector(SELECTOR.RELOAD_BUTTON);
      if (btn) {
        btn.dataset.gpalVisible = true;
      }
    },

    /*
     * hide new posts button
     */
    hide: function() {
      var btn = doc.querySelector(SELECTOR.RELOAD_BUTTON);
      if (btn) {
        btn.dataset.gpalVisible = false;
      }
    },

    /*
     * check whether new posts button is already processed or not
     * (return ture if not processed)
     */
    isNotProcessed: function() {
      var btn = doc.querySelector(SELECTOR.RELOAD_BUTTON);
      return btn && !btn.dataset.gpalProcessed;
    },

    /*
     * mark processed
     */
    markProcessed: function() {
      var btn = doc.querySelector(SELECTOR.RELOAD_BUTTON);
      if (btn) {
        btn.dataset.gpalProcessed = true;
      }
    }
  };

  /**************************************************************************************
   *
   * observe some event
   *
   *************************************************************************************/
  var observe = function() {

    //
    // called when new posts available
    //
    var onNewPosts = function() {
      autoLoad();
    };

    //
    // called when scroll on top
    //
    var onScrollTop = function() {
      autoLoad();
    };

    if (!dom.pane) return;

    // observe adding reload button node
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var i = mutation.addedNodes ? mutation.addedNodes.length : 0;
        while (i--) {
          var node = mutation.addedNodes[i];
          if (hasClasses(node, CLASS.RELOAD_BUTTON)) {
            onNewPosts();
          }
        }
      });
    });
    observer.observe(dom.pane, {childList: true, subtree: true});

    // observe scrolling to top
    win.addEventListener('scroll', function() {
      if (isScrollTop()) {
        onScrollTop();
      }
    });
  };


  /**************************************************************************************
   *
   * try to load new posts automatically
   *
   *************************************************************************************/
  var autoLoad = function() {

    /*
     * check whether comment box has focues or not
     */
    var isCommentBoxHasFocus = function() {
      var focus = doc.activeElement;
      try {
        return (focus && hasClasses(focus, ['editable']) && !focus.parentNode.parentNode.id.search(/\:.+\.editor/));
      }
      catch (error) {
        return false;
      }
    };

    // if document is at scroll top
    if (isScrollTop()) {

      // hide 'New Posts' button
      newPostsButton.hide();

      // if not yet processed, and comment box dosen't have focus
      if (newPostsButton.isNotProcessed() && !isCommentBoxHasFocus()) {
        // do auto loading
        if (gpal.Loader.load()) {
          newPostsButton.markProcessed();
        }
      }
    }
    // if document is not at scroll top
    else {
      // show 'New Posts' button
      newPostsButton.show();
    }
  };

  /**************************************************************************************
   *
   * entry point of this script
   *
   *************************************************************************************/
  gpal.Loader.init();
  observe();

}(this, document));
