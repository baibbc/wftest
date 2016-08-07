/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */

var src = './src';
var dest = './app';

module.exports = {
  less: {
    all: src + "/less/**/*.less",  //所有less
    src: src + "/less/*.less",   //需要编译的less
    dest: dest + "/styles",     //输出目录
    settings: {     //编译less过程需要的配置，可以为空
    }
  },
  jade: {
    src: src + '/jade/**/*.jade',
    dest: dest + '/tpls'
  },
  plugins: {
    destJs: dest + '/scripts',
    destCss: dest + '/styles',
    concatJs: 'libs.js',
    concatCss: 'libs.css'
  },
  angular: {
    all: [src +'/app.js', src + '/jade/**/*.js'],
    dest: dest + "/scripts",
    concat: 'app.js'
  },
  coffee: {
    all: [src +'/app.coffee', src + '/jade/**/*.coffee'],
    dest: dest + "/scripts",
    concat: 'app.js'
  },
  connect: {
    livereload: true,
    port: 9999,
    root: 'app',
    reload: dest + '/*.html'
  }
}