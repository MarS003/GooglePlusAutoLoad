/************************************************************************
 *
 * The Blue 'New Posts' Button
 *
 */
gpal.NewPostsButton = {

  win: null,
  doc: null,
  VISIBLE_CLASSNAME: '_visible_',
  SELECTOR: {
    NEWPOSTS_AREA: '.Cge.ZAc'
  },

  /*
   * initialize this object
   */
  init: function(win, doc) {
    this.win = win;
    this.doc = doc;
  },

  /*
   * show new posts button
   */
  show: function() {
    var area = this.doc.querySelector(this.SELECTOR.NEWPOSTS_AREA);
    if (area) {
      if (!area.classList.contains(this.VISIBLE_CLASSNAME)) {
        area.classList.add(this.VISIBLE_CLASSNAME);
      }
    }
  },

  /*
   * hide new posts button
   */
  hide: function() {
    var area = this.doc.querySelector(this.SELECTOR.NEWPOSTS_AREA);
    if (area) {
      area.classList.remove(this.VISIBLE_CLASSNAME);
    }
  }

};


