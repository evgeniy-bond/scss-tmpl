var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

var sync = function(){
    return browserSync.init({
        port: 8010,
        server: {
            baseDir: "src",
        }
    });
}

gulp.task('browser-sync', sync);
module.exports = sync;