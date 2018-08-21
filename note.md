## Gulp系列文章-实际项目配置

image

```js
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
gulp.task('img', function() {
  //压缩图片
  gulp.src('src/images/*.{png,jpg,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
  //制作雪碧图
  gulp.src('src/images/sprite/*')
    .pipe(spritesmith({
      'imgName': 'sprite.png',
      'cssName': 'sprite.css',
      'padding': 5
    }))
    .pipe(gulp.dest('src/styles/sprite'));　　　
  gulp.src('src/styles/sprite/sprite.png')　　　　　
    .pipe(gulp.dest('dist/images'));
});
gulp.task('default', ['img']);
```

css

```js
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var clean = require('gulp-clean');

gulp.task('sass', function() {
  return　 gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles/css'));
});

gulp.task('css', ['sass'], function() {
  return gulp.src('dist/styles/css/*.css')
    //合并文件
    .pipe(concat('style.min.css'))
    //根据设置浏览器版本自动处理浏览器前缀
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0']
    }))
    //压缩css文件
    .pipe(cleancss({ compatibility: 'ie9' }))
    //输出到目标目录
    .pipe(gulp.dest('dist/styles'));
});


gulp.task('default', ['css']);
```

js 

```js
var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
gulp.task('js', function(){
  return gulp.src('src/scripts/*.js')
    .pipe(babel({
      presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
})

gulp.task('default', ['js']);
```

```js
var gulp = require('gulp');
var rev = require('gulp-rev');
var useref = require('gulp-useref');
var revReplace = require('gulp-rev-replace');
gulp.task('file', function() {
  gulp.src('*.html')
    .pipe(useref())
    .pipe(rev())
    .pipe(revReplace())
    .pipe(gulp.dest(''));
});
gulp.task('default', ['file']);
```

