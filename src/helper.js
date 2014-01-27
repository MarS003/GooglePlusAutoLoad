/* global gpal: true; */

/************************************************************************
 *
 * Some helper functions
 *
 */
gpal.Utils = {

  /*
   * check whether element has classes or not
   */
  hasClasses: function(elem, classList) {

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
  },

  /*
   * check whether scroll position is at top or not
   */
  isScrollTop: function() {
    return (gpal.doc.body.scrollTop || gpal.doc.documentElement.scrollTop) <= 100;
  }
  
};
