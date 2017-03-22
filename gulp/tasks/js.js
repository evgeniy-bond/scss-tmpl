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
        .pipe(connect.reload())
};

//js
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(autopolyfiller('bundle.js'))
        .pipe(notify("Done!"))
        .pipe(gulp.dest('src/js/'));
});

gulp.task('min-js', function (cb) {
  var options = {
    preserveComments: 'license'
  };
  pump([
      gulp.src('src/js/*.js'),
      minifier(options, uglifyjs),
      gulp.dest('dist')
    ],
    cb
  );
});