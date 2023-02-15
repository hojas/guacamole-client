const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const insert = require('gulp-insert');

gulp.task('default', function() {
    return gulp.src('guacamole-common-js/src/main/webapp/modules/*.js')
        .pipe(concat('guacamole-common.js'))
        .pipe(insert.append('module.exports = Guacamole;'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('guacamole-common.min.js'))
        .pipe(gulp.dest('dist'));
});
