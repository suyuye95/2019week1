var gulp = require('gulp');
var sass = require('gulp-sass');

//编译sass
gulp.task('devSass', function() {
        return gulp.src('./src/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css/'))
    })
    //监听sass文件
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devSass'))

})