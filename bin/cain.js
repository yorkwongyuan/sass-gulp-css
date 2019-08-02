#! /usr/bin/env node
let program = require("commander"),
  chalk = require("chalk"),
  sassMain = require("./sass.js")

program.command('sass')
  .option('--w', '舰艇sass变化,执行自动编译')
  .option('--h', '帮助')
  .alias("sa")
  .description('sass 转 css')
  .action(function (option) {
    // 如果输入了--w命令
    if (option.w) {
      sassMain.sassWatch()
    } else {
      sassMain.sassMake()
    }
  })

program.parse(process.argv);

