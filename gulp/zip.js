var gulp = require('gulp'),
    zip = require("gulp-zip"),
    plumber = require('gulp-plumber'),
    path = require('./path');

var zipTask = function () {
    return gulp.src(path.dist.dir)
        .pipe(plumber())
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest(path.root))
};

gulp.task('zip', zipTask);
module.exports = zipTask;