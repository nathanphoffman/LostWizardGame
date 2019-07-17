var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var connect = require('gulp-connect');
var path = require('path');

function getConfig(isProd)
{
    var config = {
      webpack: "./webpack.config.js"
    };

    var configDev = {
      webpack: "./webpack.config.js"
    };

    return isProd ? config : configDev;
}

gulp.task("build", function (callback) {
  var config = getConfig(true);
  //moveVendorAssets();
  runWebpack(config,callback);
});

gulp.task("build-dev", function (callback) {
  var config = getConfig(false);
  //moveVendorAssets();
  runWebpack(config,callback);
});

function runWebpack(config,callback)
{
  var webpackConfig = require(config.webpack);
  webpack(webpackConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
}
/*
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch('app/*', ['build-dev']);
});
*/
// used to host a server
gulp.task('webserver', function () {
  connect.server({
    root:'.'
  });
});

