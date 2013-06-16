
/*--------------------------------------------------------------------
 * ID attribute definition
 */
gpal.ID = {
  CONTENT_PANE:  'contentPane'
};


/*--------------------------------------------------------------------
 * CLASS attribute definition
 */
gpal.CLASS = {
  POST:             'Tg Sb'.split(' '),
  NEWPOSTS_BUTTON:  'a-f-e c-b c-b-M f8ocqf Ri07Rc'.split(' '),
  EDITBOX:          'yd editable'.split(' ')
};

/*--------------------------------------------------------------------
 * Query Selector string
 */
gpal.SELECTOR = {
  NEWPOSTS_AREA:        '.qyoDxe.v2DU7e',
  NEWPOSTS_BUTTON:      '.pdsQUd.vqlG > [role="button"]'
};

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
  isScrollTop: function(doc) {
    var scrollTop = doc.body.scrollTop || doc.documentElement.scrollTop;
    return scrollTop <= 100;
  }

};


