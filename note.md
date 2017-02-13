## gulp工作流
1 npm install
2 安装gulp依赖和常用依赖包 比如：npm install gulp gulp-less gulp-concat gulp-uglify gulp-cssnano gulp-minify-html gulp-minify-css --save-dev
3 添加gulpfile.js文件并创建任务
4 命令行gulp taskname执行任务(任务名自由命名。例如：gulp less执行less任务)
5 命令行gulp server开始一个项目

## 基本使用

- 定义一个任务
- 复制单个文件
- 复制多个文件
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
- 文件监视自动执行任务

## 常用插件

- [编译 Less：gulp-less](https://www.npmjs.com/package/gulp-less)
- [编译 Jade: gulp-jade](https://www.npmjs.com/package/gulp-jade)
- [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)
- [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [最小化 js 文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [压缩html文件 gulp-htmlmin](https://www.npmjs.com/package/gulp-minify-html)
- [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)