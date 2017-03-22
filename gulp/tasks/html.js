var gulp = require('gulp'),
    path = require('path'),
    rename = require('gulp-rename'),
    htmlhint = require("gulp-htmlhint"),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect');

var htmlTask = function () {
    return gulp.src('/src/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(connect.reload())
};

gulp.task('html', htmlTask);
module.exports = htmlTask;