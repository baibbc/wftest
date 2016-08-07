var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');
var config = require('../config.js').plugins;

var filterByExtension = function(extension){
    return filter(function(file){
        return file.path.match(new RegExp('.' + extension + '$'));
    }, {restore: true});
};

gulp.task('plugins', function(){
    var mainFiles = mainBowerFiles();
    if(!mainFiles.length){
        return;
    }

    var jsFilter = filterByExtension('js');

    return gulp.src(mainFiles)
        .pipe(jsFilter)
        .pipe(concat(config.concatJs))
        .pipe(gulp.dest(config.destJs))
        .pipe(jsFilter.restore)
        .pipe(filterByExtension('css'))
        .pipe(concat(config.concatCss))
        .pipe(gulp.dest(config.destCss));
});