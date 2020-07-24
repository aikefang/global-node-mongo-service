/**
 * 定时任务
 * 排查commit请求记录请求失败的git文件 重新请求
 */

const docModel = require('../app/models/doc/doc')

const runGithub = require('../lib/run-github')

const schedule = require('node-schedule')

const fn = async () => {

  // 定时任务 一小时一次
  schedule.scheduleJob('30 1 * * * *', async () => {

    const res = await docModel.find({
      commit: []
    }, {
      path: 1
    })

    // 没有数据不执行
    if (res.length === 0) {
      return
    }

    const list = res.map(data => data.path + '.md')

    runGithub({
      list
    })
  })

}


// exports = fn

module.exports = fn