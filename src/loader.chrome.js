/* global gpal: true, KeyboardEvent: true; */

/**************************************************************************************
 *
 * Loading New Posts (for Chrome Extension)
 *
 *************************************************************************************/
(function(doc){

  //
  // initialize this object
  //
  var init = function() {
    injectExec(function(doc) {

      // load by emulate 'L' key event
      var load = function() {
        emulateKeyEvent('keydown',    0,  76, 'U+004C');
        emulateKeyEvent('keypress', 108, 108, 'U+004C');
        emulateKeyEvent('keyup',      0,  76, 'U+004C');
      };

      // emulate keyboard event
      var emulateKeyEvent = function(type, charCode, keyCode, keyIdentifier) {
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

        doc.dispatchEvent(ev);
      };

      // exports
      var global = this;
      global.gpal = global.gpal || {};
      global.gpal.LoaderImpl = {
        load: load
      };

    });
  };

  //
  // do auto loading
  //
  var load = function() {
    injectExec(function() {
      gpal.LoaderImpl.load();
    });
    return true;
  };

  //
  // inject code into host page as immediate function
  //
  var injectExec = function(func) {
    var script = doc.createElement('script');
    script.textContent = '(' + func.toString() + ')(document);';
    doc.head.appendChild(script);
    script.parentNode.removeChild(script);
  };

  //
  // exports
  //
  var global = this;
  global.gpal = global.gpal || {};
  global.gpal.Loader = {
    init: init,
    load: load
  };

}(document));
