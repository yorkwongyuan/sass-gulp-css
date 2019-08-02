let sass = require('gulp-sass'),
  chalk = require('chalk'),
  Util = require('../lib/util'),
  gulp = require('gulp')

let sassMain = {
  sassMake: function () {
    sassChange()
  },
  sassWatch: function () {
    console.log(chalk.green('正在监听...'))
    let conf;
    Util.getConfig(function (config) {
      conf = config
    })
    let watcher = gulp.watch(conf.sass.sassUrl + '*.scss')
    watcher.on('change', function (event) {
      sassChange()
    })
  }
}

function sassChange () {
  let conf;
  Util.getConfig(function (config) {
    conf = config;
  })

  return gulp.src(conf.sass.sassUrl + '*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(conf.sass.output))
}

module.exports = sassMain