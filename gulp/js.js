var gulp = require('gulp'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    path = require('./path');

var jsTask = function () {
    return gulp.src(path.src.js + 'work/*.js')
        .pipe(plumber())
        .pipe(rigger())
        .pipe(rename('index.js'))
        .pipe(gulp.dest(path.src.js))
        .pipe(uglify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(path.src.js))
};

gulp.task('js', jsTask);
module.exports = jsTask;