var path = {
    root: '/',
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        dir: 'dist/',
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'src/scss/*.scss',
        css: 'src/css/',
        img: 'src/img/*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*',
        sprite: 'src/sprite/'
    }
};

module.exports = path;