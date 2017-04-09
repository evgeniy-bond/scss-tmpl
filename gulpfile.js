var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//tasks
var css = require('./gulp/cssTask/css'),
    html = require('./gulp/html'),
    js = require('./gulp/js'),
    img = require('./gulp/img'),
    fonts = require('./gulp/fonts'),
    zip = require('./gulp/zip'),
    sprite = require('./gulp/sprite');

//browserSync
gulp.task('browser-sync', function () {
    browserSync.init({
        port: 8010,
        server: {
            baseDir: "src",
        }
    });
});

//watch
gulp.task('watch', ['browser-sync', 'css'], function () {
    gulp.watch('src/*.html', html);
    gulp.watch('src/**/*.scss', css);
    gulp.watch('src/js/**/*.js', js);
    gulp.watch(['src/**/*.scss', 'src/*.html', 'src/js/**/*.js'], browserSync.reload);
});

gulp.task('default', ['watch']);