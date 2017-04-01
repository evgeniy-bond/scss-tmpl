var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber');

var imgTask = function () {
    return gulp.src(path.src.img)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(path.src.img))
};

gulp.task('img', imgTask);
module.exports = imgTask;