// -------------- DEPENDENCIES --------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const atimport = require('postcss-import');
const webpack_stream = require('webpack-stream')
const webpack = require('webpack');
const webpack_config = require('./webpack.config.js');



// -------------- TASKS --------------

// Compile css
gulp.task('styles', () => {

    let tailwindcss = require('tailwindcss');

    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            atimport(),
            tailwindcss('src/styles/tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('./static'));
});

// Compile js
gulp.task('scripts', () => {
    return webpack_stream(webpack_config, webpack)
        .pipe(gulp.dest(`static/`));
});