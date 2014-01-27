/* global gpal: true; */

(function(win, doc) {

  if (win.top !== win) {
    return;
  }

  gpal.win = win;
  gpal.doc = doc;

  gpal.dom = gpal.dom || {};
  gpal.dom.pane = doc.getElementById('contentPane');

  gpal.SELECTOR = gpal.SELECTOR || {};
  gpal.CLASS    = gpal.CLASS    || {};

  gpal.SELECTOR.BUTTON_AREA   = '.tke.oDc';
  gpal.SELECTOR.RELOAD_BUTTON = '.d-k-l.b-c.b-c-U.JFd.JZ';
  gpal.CLASS.RELOAD_BUTTON    = ['d-k-l', 'b-c', 'b-c-U', 'JFd', 'JZ'];

  gpal.Loader.init();
  gpal.Observer.run();

}(window, document));
