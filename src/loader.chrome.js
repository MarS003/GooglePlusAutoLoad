/************************************************************************
 *
 * Loading New Posts (for Chrome Extension)
 *
 */
gpal.Loader = {

  win: null,
  doc: null,

  /*
   * initialize this object
   */
  init: function(win, doc) {

    this.win = win;
    this.doc = doc;

    // define LoadProxy as global object on host page
    this._injectExec(function() {

      window.gpal = window.gpal || {};
      window.gpal.Load = {

        load: function() {
          this.emulateKeyEvent('keydown',    0,  76, 'U+004C');
          this.emulateKeyEvent('keypress', 108, 108, 'U+004C');
          this.emulateKeyEvent('keyup',      0,  76, 'U+004C');
        },

        emulateKeyEvent: function(type, charCode, keyCode, keyIdentifier) {

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
  },

  /*
   * inject code into host page as immediate function
   */
  _injectExec: function(func) {
    var script = this.doc.createElement('script');
    script.textContent = '(' + func.toString() + ')();';
    this.doc.head.appendChild(script);
    script.parentNode.removeChild(script);
  }

};


