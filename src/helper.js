
/*
 .Cge.ZAc(.bBc.aBc)
  > .d-k-l.b-c.b-c-T.fCd.PZa[role="button"] // reload button
  > .d-k-l.b-c.b-c-T.Qgc.PZa[role="button"] // resume button
  > .nZb // bookmark icon

tke oDc(qDc pDc) // (on scroll down)
 > d-k-l b-c b-c-U JFd JZ // reload button
 > d-k-l b-c b-c-U Yic JZ // resume button
 > F4 // bookmark icon

*/

/*--------------------------------------------------------------------
 * Some helper functions
 */
gpal.Utils = {

  /*
   * check whether element has classes or not
   */
  hasClasses: function(elem, classList) {

    var i;

    if (!elem || !elem.classList) {
      return false;
    }

    i = classList.length;
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


