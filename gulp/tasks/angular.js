var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config.js').angular;

gulp.task('angular', function(){  
    return gulp.src(config.all)
        .pipe(concat(config.concat))
        .pipe(gulp.dest(config.dest))
});