var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    path = require('./path');

var fontTask = function () {
    return gulp.src(path.src.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(path.src.fonts))
};

gulp.task('fonts', fontTask);
module.exports = fontTask;