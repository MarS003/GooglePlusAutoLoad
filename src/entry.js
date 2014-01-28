/* global gpal: true; */

(function(win, doc) {

  // only top frame can run this script
  if (win.top !== win) {
    return;
  }

  // global-like scope variables
  gpal.win      = win;
  gpal.doc      = doc;
  gpal.dom      = {pane: doc.getElementById('contentPane')};
  gpal.SELECTOR = {};
  gpal.CLASS    = {};

  //
  // .tke.oDc
  //   .d-k-l.b-c.b-c-U.JFd.JZ[role="button"]  <= reload button
  //     .b1b
  //       (text: N new)
  //   .d-k-l.b-c.b-c-U.Yic.JZ[role="button"]  <= resume button
  //     .b1b
  //       (text: Resume)
  //   .F4  <= bookmark icon
  //
  gpal.SELECTOR.RELOAD_BUTTON = '.d-k-l.b-c.b-c-U.JFd.JZ';
  gpal.CLASS.RELOAD_BUTTON    = ['d-k-l', 'b-c', 'b-c-U', 'JFd', 'JZ'];

  //
  // .gb_zb.gb_Hb.gb_j
  //   #gbsfw.gb_s
  //     iframe[aria-hidden]  <= for notification area and new post
  //   #gbwa.gb_q.gb_Fa.gb_j
  //     div[aria-hidden]     <= for google application palette
  //   .gb_ea.gb_Fa.gb_Hb.gb_j
  //     div[aria-hidden]     <= for account palette
  //
  gpal.SELECTOR.OVERLAY_FRAME = '.gb_zb.gb_Hb.gb_j [aria-hidden="false"]';

  // start this extension
  gpal.Loader.init();
  gpal.Observer.run();

}(window, document));
