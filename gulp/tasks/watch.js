var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js');

gulp.task('watch', function(){
    watch(config.coffee.all, function(){
        gulp.start('coffee', 'html');
    })
    watch(config.jade.src, function(){
        gulp.start('jade', 'html');
    })
    watch(config.sass.all, function(){
        gulp.start('sass', 'html');
    })
    watch(config.connect.reload, ['html']);
})

// Default task
gulp.task('default', function() {
    gulp.start('plugins', 'jade', 'sass', 'coffee', 'watch', 'connect');
});

