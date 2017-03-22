var gulp = require('gulp'),
    path = require('path'),
    rename = require('gulp-rename'),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect'),
    autopolyfiller = require('gulp-autopolyfiller'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

var jsTask = function () {
    return gulp.src('/src/js/*.js')
        .pipe(autopolyfiller())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('/src/js/'))
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('/src/js/'))
        .pipe(connect.reload())
};

gulp.task('js', jsTask);
module.exports = jsTask;