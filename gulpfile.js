//main
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect');

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

//live-reload
gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true
    });
});

//watch
gulp.task('watch', function () {
    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/scss/*.scss', ['css', 'min-css']);
    gulp.watch('src/js/*.js', ['js', 'min-js']);
});

gulp.task('default', ['connect', 'watch']);

gulp.task('dist', ['uncss'])