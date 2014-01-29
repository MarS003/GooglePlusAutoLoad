/**************************************************************************************
 *
 * Loading New Posts (for Firefox add-on)
 *
 *************************************************************************************/
(function(doc){

  //
  // initialize this object
  //
  var init = function() {
  };

  var load = function() {
    emulateKeyEvent('keydown',    0,  76, 'U+004C');
    emulateKeyEvent('keypress', 108, 108, 'U+004C');
    emulateKeyEvent('keyup',      0,  76, 'U+004C');
    return true;
  };

  //
  // do auto loading
  //
  var emulateKeyEvent = function(type, charCode, keyCode, keyIdentifier) {
    var ev = doc.createEvent('KeyboardEvent');
    ev.initKeyEvent(type, true, true, null, false, false, false, false, keyCode, charCode);
    doc.dispatchEvent(ev);
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
