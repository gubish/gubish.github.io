var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    concat          = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('sass/common.sass')
        .pipe(sass())
        .pipe(concat('common.css'))
        .pipe(autoprefixer('last 5 version', '> 1%', 'ie 8'))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.sass', ['default']);
});
