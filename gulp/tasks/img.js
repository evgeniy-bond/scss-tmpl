var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
    path = require('path'),
    rename = require('gulp-rename'),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect');

var imgTask = function () {
    return gulp.src('/src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('/dist/img'))
};

gulp.task('img', imgTask);
module.exports = imgTask;