var gpal = gpal || {};

/**************************************************************************************
 *
 * Loading New Posts (for Firefox Extension)
 *
 *************************************************************************************/
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
    return true;
  },

  _emulateKeyEvent: function(type, charCode, keyCode, keyIdentifier) {
    var ev = document.createEvent('KeyboardEvent');
    ev.initKeyEvent(type, true, true, null, false, false, false, false, keyCode, charCode);
    document.dispatchEvent(ev);
  }

};
