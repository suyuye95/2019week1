var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//编译sass
gulp.task('devSass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
})

gulp.task('server', function() {
        gulp.src('./src/')
            .pipe(webserver({
                port: 8000,
                livereload: true,
                open: true
            }))
    })
    //监听sass文件
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devSass'))

})

//合并压缩js
gulp.task('mincopyJS', function() {
    return gulp.src('./src/js/yjs/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/yjs/'))
})

gulp.task('default', gulp.parallel('mincopyJS', 'devSass', 'server', 'watch'))


//拷贝css到dist
gulp.task('copycss', function() {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css'))
})

//生成到dist文件夹
//build任务
gulp.task('build', gulp.parallel('copycss', 'mincopyJS'))