var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//tasks
var css = require('./gulp/cssTask/css');
var html = require('./gulp/html');
var js = require('./gulp/js');
var img = require('./gulp/img');
var fonts = require('./gulp/fonts');

//browserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        port: 8010,
        server: {
            baseDir: "src",
        }
    });
});

//watch
gulp.task('watch', ['browser-sync', 'css'], function(){
  gulp.watch('src/*.html', html);
  gulp.watch('src/**/*.scss', css); 
  gulp.watch('src/js/**/*.js', js);
  gulp.watch(['src/**/*.scss', 'src/*.html', 'src/js/**/*.js'], browserSync.reload);
});

gulp.task('default', ['watch']);