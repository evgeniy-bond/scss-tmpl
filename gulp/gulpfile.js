var css = require('./tasks/css');
var html = require('./tasks/html');
var js = require('./tasks/js');

var gulp = require('gulp'),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect');

//live-reload
gulp.task('connect', function () {
    connect.server({
        root: '/src',
        livereload: true
    });
});

//watch
gulp.task('watch', function () {
    gulp.watch('/src/index.html', html);
    gulp.watch('/src/**/*.scss', css);
    gulp.watch('/src/js/*.js', js);
});

gulp.task('default', ['connect', 'watch']);