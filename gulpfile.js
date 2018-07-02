var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var tsProject = ts.createProject('tsconfig-build.json');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default', function () {
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());
  return merge([
    tsResult.js
      .pipe(sourcemaps.write('.', {
        includeContent: false
      }))
      .pipe(gulp.dest('lib')),
    tsResult.dts.pipe(gulp.dest('lib'))
  ]);
});

gulp.task('compress', function (cb) {
  pump([
    gulp.src('lib/**/*.js'),
    uglify({
      mangle: {
        properties: false
      }
    }),
    gulp.dest('lib')
  ],
    cb
  );
});
