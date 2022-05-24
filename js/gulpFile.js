const { src, dest, watch, series } = require('gulp');
const SASS = require('gulp-sass')(require('sass'));
const PURGE_CSS = require('gulp-purgecss');

function compileSassFiles() {
  return src('../style/**/*.scss')
    .pipe(SASS())
    .pipe(PURGE_CSS({ content: ['../*.html'] }))
    .pipe(dest('../style/css'));
}

function watchSassFiles() {
  return watch(['../style/**/*.scss'], compileSassFiles);
}

exports.default = series(compileSassFiles, watchSassFiles);
