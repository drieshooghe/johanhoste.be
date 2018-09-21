// -------------- DEPENDENCIES --------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const atimport = require('postcss-import');
const cssnano = require('cssnano');
const webpack_stream = require('webpack-stream')
const webpack = require('webpack');
const webpack_config = require('./webpack.config.js');



// -------------- TASKS --------------

// Compile css
gulp.task('css', () => {

    let tailwindcss = require('tailwindcss');

    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            atimport(),
            tailwindcss('src/styles/tailwind.config.js'),
            require('autoprefixer')
        ]))
        .pipe(gulp.dest('./static'));
});

gulp.task('css:prod', () => {

    let tailwindcss = require('tailwindcss');

    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            atimport(),
            tailwindcss('src/styles/tailwind.config.js'),
            require('autoprefixer'),
            cssnano()
        ]))
        .pipe(gulp.dest('./static'));
});

gulp.task('css:watch', function () {
    gulp.watch('src/styles/**/*.scss', ['css']);
});

// Compile js
gulp.task('js', () => {
    return webpack_stream(webpack_config, webpack)
        .pipe(gulp.dest(`static/`));
});

gulp.task('js:watch', function () {
    gulp.watch('src/scripts/**/*.+(js|ts|vue)', ['js']);
});

// Development tasks
gulp.task('build:dev', function () {
    gulp.start('css', 'js');
});

gulp.task('build:watch', function () {
    gulp.watch('src/scripts/**/*.+(js|ts|vue)', ['js']);
    gulp.watch('src/styles/**/*.scss', ['css']);
});

// Production tasks

gulp.task('build:prod', function () {
    gulp.start('css:prod', 'js');
});