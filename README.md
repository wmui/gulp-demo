## gulp工作流
1. npm install（安装gulp任务的依赖包）
2. 如果添加新的gulp任务依赖包 比如：npm install gulp-less --save-dev
3. gulpfile.js文件包含了一些常用任务，可随项目需要添加其他任取
4. 命令行gulp taskname执行单个任务(任务名和gulpfile文件中任务名对应)
5. 命令行gulp server开始一个项目

## 基本使用
- [globs匹配语法](https://github.com/isaacs/node-glob)
    + src/\*
    + src/\*/\*
    + src/\*\*/\*
    + src/\*.jpg
    + src/\*.{jpg,png}
    + 多个globs
        * ['src/\*.{jpg,png}','a/a.html']
- 排除某些文件
    + !xxxxx
- 默认任务
    + gulp 中的任务名有个特殊值 default

## 常用插件

- [编译 Less：gulp-less](https://www.npmjs.com/package/gulp-less)
- [编译 Jade: gulp-jade](https://www.npmjs.com/package/gulp-jade)
- [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)
- [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [最小化 js 文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [压缩html文件 gulp-htmlmin](https://www.npmjs.com/package/gulp-minify-html)
- [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
