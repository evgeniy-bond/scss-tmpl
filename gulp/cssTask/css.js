var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    combineMq = require('gulp-combine-mq'),
    csscomb = require('gulp-csscomb'),
    csslint = require('gulp-csslint'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    path = require('../path');

var cssTaskOptions = require('./options');

var css = function () {
    return gulp.src(path.src.scss)
        .pipe(plumber())
        .pipe(sass(cssTaskOptions.sassOptions).on('error', sass.logError))
        .pipe(postcss(cssTaskOptions.postcssPlugins))
        .pipe(autoprefixer(cssTaskOptions.autoprefixerOptions))
        .pipe(combineMq(cssTaskOptions.combineMqOptions))
        .pipe(gulp.dest(path.src.css))
        .pipe(cleanCSS(cssTaskOptions.cleanCSSOptions))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(path.src.css))
}

gulp.task('css', css);
module.exports = css;