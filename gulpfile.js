'use strict'

const spawn = require('child_process').spawn;
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', () => {
    return gulp.src(['server/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('app/'))
});

gulp.task('start', gulp.series('js', function() {
    spawn(
        'electron.cmd',
        ['app/electron'],
        { stdio: 'inherit' }
    ).on('close', () => process.exit());
}));