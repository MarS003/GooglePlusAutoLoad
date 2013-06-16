/************************************************************************
 *
 * Proxy for New Posts Loading (for Firefox add-on)
 *
 */
gpal.LoaderProxy = {

  win: null,
  doc: null,

  /*
   * initialize this object
   */
  init: function(win, doc) {
    this.win = win;
    this.doc = doc;
  },

  /*
   * do auto loading
   */
  load: function() {
    this.emulateKeyEvent('keydown',    0,  76, 'U+004C');
    this.emulateKeyEvent('keypress', 108, 108, 'U+004C');
    this.emulateKeyEvent('keyup',      0,  76, 'U+004C');
  },

  emulateKeyEvent: function(type, charCode, keyCode, keyIdentifier) {
    var ev = this.doc.createEvent('KeyboardEvent');
    ev.initKeyEvent(type, true, true, null, false, false, false, false, keyCode, charCode);
    this.doc.dispatchEvent(ev);
  }

};


