/* global gpal: true, KeyboardEvent: true; */

/************************************************************************
 *
 * Loading New Posts (for Chrome Extension)
 *
 */
gpal.Loader = {

  /*
   * initialize this object
   */
  init: function() {

    // define LoadProxy as global object on host page
    this._injectExec(function() {

      window.gpal = window.gpal || {};
      window.gpal.Load = {

        load: function() {
          this._emulateKeyEvent('keydown',    0,  76, 'U+004C');
          this._emulateKeyEvent('keypress', 108, 108, 'U+004C');
          this._emulateKeyEvent('keyup',      0,  76, 'U+004C');
        },

        _emulateKeyEvent: function(type, charCode, keyCode, keyIdentifier) {

          var ev = new KeyboardEvent(type, {
            bubbles:       true,
            cancelBubble:  false,
            cancelable:    true,
            keyIdentifier: keyIdentifier,
            location:      0,
            view:          null
          });

          ev._charCode = charCode;
          ev._keyCode  = keyCode;

          Object.defineProperty(ev, 'charCode', {get: function() {return this._charCode;}});     
          Object.defineProperty(ev, 'keyCode',  {get: function() {return this._keyCode;}});     
          Object.defineProperty(ev, 'which',    {get: function() {return this._keyCode;}});     

          document.dispatchEvent(ev);
        }
      };
    });
  },

  /*
   * do auto loading
   */
  load: function() {
    this._injectExec(function() {
      window.gpal.Load.load();
    });
    return true;
  },

  /*
   * inject code into host page as immediate function
   */
  _injectExec: function(func) {
    var script = gpal.doc.createElement('script');
    script.textContent = '(' + func.toString() + ')();';
    gpal.doc.head.appendChild(script);
    script.parentNode.removeChild(script);
  }

};
