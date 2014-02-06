/* global require: true, console: true; */
var gulp   = require("gulp");
var uglify = require("gulp-uglify");
var csso   = require("gulp-csso");
var concat = require("gulp-concat");
var clean  = require("gulp-clean");
var jedit  = require("gulp-json-editor");
var xedit  = require("gulp-xml-editor");
var argv   = require("argh").argv;
var exec   = require("child_process").exec;

var version = null;
if (argv.define && argv.define.version) {
  version = argv.define.version;
}

/***********************************************************************************
 *
 * default task
 *
 **********************************************************************************/
gulp.task("default", ["chrome", "opera", "firefox", "safari"], function() {
});


/***********************************************************************************
 *
 * task to make chrome extension
 *
 **********************************************************************************/
gulp.task("chrome", function() {
  var dest = "dist/chrome";

  // javascript file
  gulp.src(["src/loader.chrome.js", "src/content.js"])
      .pipe(uglify())
      .pipe(concat("content.js"))
      .pipe(gulp.dest(dest));

  // css file
  gulp.src(["style/content.css"])
      .pipe(csso())
      .pipe(gulp.dest(dest));

  // other resource file
  gulp.src(["contrib/icon/icon-16.png", "contrib/icon/icon-48.png", "contrib/icon/icon-128.png"])
      .pipe(gulp.dest(dest));

  // update version
  if (version) {
    gulp.src("dist/chrome/manifest.json")
        .pipe(jedit(function(json) {
          json.version = version;
          return json;
        }))
      .pipe(gulp.dest(dest));
  }

  // create zip file
  exec("zip -q dist/auto-load-new-posts-for-google-plus.zip dist/chrome/*");
});


/***********************************************************************************
 *
 * task to make opera add-on
 *
 **********************************************************************************/
gulp.task("opera", function() {
  var dest = "dist/opera";

  // javascript file
  gulp.src(["src/loader.chrome.js", "src/content.js"]) // use same loader as chrome
      .pipe(uglify())
      .pipe(concat("content.js"))
      .pipe(gulp.dest(dest));

  // css file
  gulp.src(["style/content.css"])
      .pipe(csso())
      .pipe(gulp.dest(dest));

  // other resource file
  gulp.src(["contrib/icon/icon-16.png", "contrib/icon/icon-48.png", "contrib/icon/icon-128.png"])
      .pipe(gulp.dest(dest));

  // update version
  if (version) {
    gulp.src("dist/opera/manifest.json")
        .pipe(jedit(function(json) {
          json.version = version;
          return json;
        }))
      .pipe(gulp.dest(dest));
  }
});


/***********************************************************************************
 *
 * task to make firefox add-on
 *
 **********************************************************************************/
gulp.task("firefox", function() {
  var dest = "dist/firefox/data";

  // javascript file
  gulp.src(["src/loader.firefox.js", "src/content.js"])
      .pipe(uglify())
      .pipe(concat("content.js"))
      .pipe(gulp.dest(dest));

  // css file
  gulp.src(["style/content.css"])
      .pipe(csso())
      .pipe(gulp.dest(dest));

  // update version
  if (version) {
    gulp.src("dist/firefox/package.json")
        .pipe(jedit(function(json) {
          json.version = version;
          return json;
        }))
      .pipe(gulp.dest("dist/firefox"));
  }

  // create xpi file
  exec("cfx --pkgdir=firefox xpi", {cwd: "dist"}, function(err) {
    if (err !== null) 
      console.log("exec error: " + err);
  });
});


/***********************************************************************************
 *
 * task to make safari extension
 *
 **********************************************************************************/
gulp.task("safari", function() {
  var dest = "dist/safari/auto-load-new-posts-for-google-plus.safariextension";

  // javascript file
  gulp.src(["src/loader.safari.js", "src/content.js"])
      .pipe(uglify())
      .pipe(concat("content.js"))
      .pipe(gulp.dest(dest));

  // css file
  gulp.src(["style/content.css"])
      .pipe(csso())
      .pipe(gulp.dest(dest));

  // other resource file
  gulp.src(["contrib/icon/icon-128.png"])
      .pipe(gulp.dest(dest));

  // update version
  if (version) {
    gulp.src("dist/safari/auto-load-new-posts-for-google-plus.safariextension/info.plist")
        .pipe(xedit(function(xml) {
          xml.get('//key[./text()="CFBundleVersion"]').nextElement().text(version);
          xml.get('//key[./text()="CFBundleShortVersionString"]').nextElement().text(version);
          return xml;
        }))
        .pipe(gulp.dest("dist/safari/auto-load-new-posts-for-google-plus.safariextension"));

    gulp.src("dist/safari/auto-load-new-posts-for-google-plus.plist")
        .pipe(xedit(function(xml) {
          xml.get('//key[./text()="CFBundleVersion"]').nextElement().text(version);
          xml.get('//key[./text()="CFBundleShortVersionString"]').nextElement().text(version);
          return xml;
        }))
        .pipe(gulp.dest("dist/safari"));
  }
});


/***********************************************************************************
 *
 * clean-up all
 *
 **********************************************************************************/
gulp.task("clean", function() {
  gulp.src(["dist/**/content.*", "dist/**/*.png", "dist/*.zip", "dist/*.crx", "dist/*.nex", "dist/*.pem", "dist/*.xpi", "dist/*.safariextz"], {read: false})
      .pipe(clean());
});
