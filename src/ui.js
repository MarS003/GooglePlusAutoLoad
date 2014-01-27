/* global gpal: true; */

/************************************************************************
 *
 * The Blue 'New Posts' Button
 *
 */
gpal.NewPostsButton = {

  /*
   * show new posts button
   */
  show: function() {
    var area = gpal.doc.querySelector(gpal.SELECTOR.BUTTON_AREA);
    if (area) {
      area.dataset.gpalVisible = true;
    }
  },

  /*
   * hide new posts button
   */
  hide: function() {
    var area = gpal.doc.querySelector(gpal.SELECTOR.BUTTON_AREA);
    if (area) {
      area.dataset.gpalVisible = false;
    }
  }

};
