'use strict';

// 载入模块
var gulp = require('gulp');

// 创建任务
/*gulp.task('taskname',function(){
	gulp.src('filepath').pipe(gulptaskname).pipe(gulp.dest('tofilepath'))
})*/



// less编译 压缩任务 
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
gulp.task('less',function(){
	gulp.src(['src/styles/*.less','!src/styles/_*.less'])
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles')) //自动创建路径和文件夹
	.pipe(browserSync.reload({stream:true})); 
});



// js合并 压缩混淆
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('js',function(){
	gulp.src('src/scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.reload({stream:true}));
});



// 图片复制
gulp.task('img',function(){
	gulp.src('src/images/*.*')
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload({stream:true}));
});



// html 压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('htmlmin',function(){
	return gulp.src('src/*.html')
	.pipe(htmlmin({collapseWhitespace: true,removeComments:true}))
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream:true}));
});

// browsersync
var browserSync = require('browser-sync').create();
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    // 监听文件变化并自动执行任务
	gulp.watch('src/styles/*.less',['less']);
	gulp.watch('src/scripts/*.js',['js']);
	gulp.watch('src/images/*.*',['img']);
	gulp.watch('src/*.html',['htmlmin']);
});
