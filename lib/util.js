const path = require("path")
const fs = require('fs');
const chalk = require("chalk")
module.exports = {
  getConfig (callback) {
    let configPath = path.join(process.cwd(), 'cain.config.js');
    console.log(configPath, 'path')
    let config = {}
    if (fs.existsSync(configPath)) {
      try {
        config = eval(fs.readFileSync(configPath, 'utf-8'));
        callback && callback(config)
      } catch (e) {
        console.log(chalk.red('获取文件失败'))
      }
    } else {
      console.log(chalk.red('文件不存在'))
    }
  }
}