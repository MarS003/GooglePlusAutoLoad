/************************************************************************
 *
 * The Blue 'New Posts' Button
 *
 */
gpal.NewPostsButton = {

  VISIBLE_CLASSNAME: '_visible_',

  /*
   * show new posts button
   */
  show: function() {
    var area = gpal.doc.querySelector(gpal.SELECTOR.BUTTON_AREA);
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
    var area = gpal.doc.querySelector(gpal.SELECTOR.BUTTON_AREA);
    if (area) {
      area.classList.remove(this.VISIBLE_CLASSNAME);
    }
  }

};


