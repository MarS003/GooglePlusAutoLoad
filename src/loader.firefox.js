/* global gpal: true; */

/************************************************************************
 *
 * Loading New Posts (for Firefox add-on)
 *
 */
gpal.Loader = {

  /*
   * initialize this object
   */
  init: function() {
  },

  /*
   * do auto loading
   */
  load: function() {
    this._emulateKeyEvent('keydown',    0,  76, 'U+004C');
    this._emulateKeyEvent('keypress', 108, 108, 'U+004C');
    this._emulateKeyEvent('keyup',      0,  76, 'U+004C');
  },

  _emulateKeyEvent: function(type, charCode, keyCode, keyIdentifier) {
    var ev = gpal.doc.createEvent('KeyboardEvent');
    ev.initKeyEvent(type, true, true, null, false, false, false, false, keyCode, charCode);
    gpal.doc.dispatchEvent(ev);
  }

};
