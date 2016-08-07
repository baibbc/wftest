var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config.js').connect;
 
gulp.task('connect', function() {
  connect.server({
    root: config.root,
    port: config.port,
    livereload: config.livereload
  });
});

gulp.task('html', function () {
  gulp.src(config.reload)
    .pipe(connect.reload());
});