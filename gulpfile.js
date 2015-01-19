var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
  js: {
    src: [
      './assets/js/main.js',
    ],
    dest: './public/js',
    watch: './assets/js/*.js',
  },
};

gulp.task('js', function () {
  return browserify(paths.js.src, { debug: true })
    .bundle().on('error', handleError)
    .pipe(source('main.js'))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', function () {
  gulp.watch(paths.js.watch, ['js']);
});

gulp.task('default', ['js']);

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

