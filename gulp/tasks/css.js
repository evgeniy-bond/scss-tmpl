var gulp = require('gulp'),
    path = require('path'),
    rename = require('gulp-rename'),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    combineMq = require('gulp-combine-mq'),
    csscomb = require('gulp-csscomb'),
    csslint = require('gulp-csslint'),
    cleanCSS = require('gulp-clean-css');

var cssTask = function () {
    return gulp.src('/src/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded', indentType: 'tab', indentWidth: '1' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 1%','last 2 versions','firefox >= 4', 'safari 7','safari 8','IE 10','IE 11'],
            cascade: false
        }))
        .pipe(combineMq({
            beautify: true
        }))
        .pipe(gulp.dest('/src/css/'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('/src/css/'))
        .pipe(refresh(server))
        .pipe(connect.reload());
}

gulp.task('css', cssTask);
module.exports = cssTask;