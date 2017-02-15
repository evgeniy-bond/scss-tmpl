//main
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    refresh = require('gulp-livereload'),
    connect = require('gulp-connect');

//css
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    combineMq = require('gulp-combine-mq'),
    csscomb = require('gulp-csscomb'),
    csslint = require('gulp-csslint'),
    cleanCSS = require('gulp-clean-css'),
    uncss = require('gulp-uncss');

//html 
var htmlhint = require("gulp-htmlhint");

//imgs
var imagemin = require('gulp-imagemin');

// //js
var autopolyfiller = require('gulp-autopolyfiller');
var uglify = require('gulp-uglify');
var pump = require('pump');

//css
gulp.task('css', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass({ outputStyle: 'expanded', indentType: 'tab', indentWidth: '1' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }))
        .pipe(combineMq({
            beautify: true
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(refresh(server))
        .pipe(connect.reload());
});

// minify css
gulp.task('min-css', function () {
    return gulp.src('src/css/style.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('src/css/'));
});

//uncss
gulp.task('uncss', function () {
    return gulp.src('dist/css/style.css')
        .pipe(uncss({
            html: ['src/index.html'],
            ignore: ['.arrow']
        }))
        .pipe(gulp.dest('dist/css/'));
});

// html
gulp.task('html', function () {
    gulp.src('src/index.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(connect.reload())
        .pipe(gulp.dest('src/'));
});

//images
gulp.task('img', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

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