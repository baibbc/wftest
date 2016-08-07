var gulp = require('gulp');
var jade = require('gulp-jade');
var cache = require('gulp-cached');
var config = require('../config.js').jade;

gulp.task('jade', function() {
  gulp.src(config.src)
    .pipe(cache('jade'))
    .pipe(jade())
    .pipe(gulp.dest(config.dest))
});