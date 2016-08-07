var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var concat = require('gulp-concat');
var cache = require('gulp-cached');
var config = require('../config.js').coffee;

gulp.task('validate_coffee', function () {
  gulp.src(config.all)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter());
});

gulp.task('coffee', ['validate_coffee'], function() {
  gulp.src(config.all)
    //.pipe(cache('coffee'))
    .pipe(coffee({bare: true}))
    .pipe(concat(config.concat))
    .pipe(gulp.dest(config.dest));
});
