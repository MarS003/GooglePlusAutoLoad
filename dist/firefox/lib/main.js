var pageMod = require("sdk/page-mod");
var self    = require("sdk/self");

pageMod.PageMod({
  include:           "https://plus.google.com/*",
  contentScriptFile: self.data.url("content.js"),
  contentStyleFile:  self.data.url("content.css")
});
