var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    plumber = require('gulp-plumber'),
    path = require('./path');

var spriteTask = function () {
    return gulp.src(path.src.sprite)
        .pipe(plumber())
        .pipe(spritesmith({
            imgName: '../sprite.png',
            cssName: 'sprite.scss',
            padding: 5
        }))
        .pipe(gulp.dest(path.src.sprite))
};

gulp.task('sprite', spriteTask);
module.exports = spriteTask;