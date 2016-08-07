var gulp = require('gulp');
var sass = require('gulp-sass-china');
var concat = require('gulp-concat');
var config = require('../config.js').sass;

gulp.task('sass', function() {
  gulp.src(config.all)
    .pipe(sass(config.settings).on('error', sass.logError))
    .pipe(concat(config.concat))
    .pipe(gulp.dest(config.dest))
});