(function(win, doc) {

// initialize each component
gpal.NewPostsButton.init(win, doc);
gpal.Loader.init(win, doc);
gpal.LoaderProxy.init(win, doc);
gpal.Observer.init(win, doc);

// run this extension
gpal.Observer.run();

}(window, document));
