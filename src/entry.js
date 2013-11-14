(function(win, doc) {

  gpal.win = win;
  gpal.doc = doc;
  gpal.dom = gpal.dom || {};
  gpal.dom.pane = doc.getElementById('contentPane');

  gpal.SELECTOR = gpal.SELECTOR || {};
  gpal.CLASS    = gpal.CLASS    || {};
  if ( gpal.Utils.hasClasses(doc.body, ['Td', 'lj'])) {
    gpal.SELECTOR.BUTTON_AREA   = '.tke.oDc';
    gpal.SELECTOR.RELOAD_BUTTON = '.d-k-l.b-c.b-c-U.JFd.JZ';
    gpal.CLASS.RELOAD_BUTTON    = ['d-k-l', 'b-c', 'b-c-U', 'JFd', 'JZ'];
  }
  else {
    gpal.SELECTOR.BUTTON_AREA   = '.Cge.ZAc';
    gpal.SELECTOR.RELOAD_BUTTON = '.d-k-l.b-c.b-c-T.fCd.PZa';
    gpal.CLASS.RELOAD_BUTTON    = ['d-k-l', 'b-c', 'b-c-T', 'fCd', 'PZa'];
  }

  gpal.Loader.init();
  gpal.Observer.run();

}(window, document));
