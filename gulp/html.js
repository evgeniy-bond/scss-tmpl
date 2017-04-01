var gulp = require('gulp'),
    rename = require('gulp-rename'),
    htmlhint = require("gulp-htmlhint"),
    plumber = require('gulp-plumber'),
    path = require('./path');

var htmlTask = function () {
    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
};

gulp.task('html', htmlTask);
module.exports = htmlTask;