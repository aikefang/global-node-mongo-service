const common = require('../../lib/common')
const runGithub = require('../../lib/run-github')

module.exports = {
  async github(ctx) {
    ctx.body = 200
    // 只处理master分支变更
    if (ctx.request.body.ref === 'refs/heads/master') {
      // common.log('github-hook-data', ctx.request.body)

      // 获取文件内容
      // https://api.github.com/repos/aikefang/suchaxun-doc/contents/linux/ab.md

      // 获取文件提交记录
      // https://api.github.com/repos/aikefang/suchaxun-doc/commits?path=linux/ab3.md&per_page=100&page=1

      const commit = ctx.request.body.commits

      const filePath = []

      !!commit && commit.forEach(data => {
        // 当前提交有新增文件
        if (data.added.length > 0) {
          data.added.forEach(addData => {
            if (/(.md)$/.test(addData)) {
              filePath.push(addData)
            }
          })
        }

        // 当前提交有修改文件
        if (data.modified.length > 0) {
          data.modified.forEach(modifiedData => {
            if (/(.md)$/.test(modifiedData)) {
              filePath.push(modifiedData)
            }
          })
        }
      })

      // 去重
      const filterPath = [...new Set(filePath)]

      runGithub({
        list: filterPath,
        errorCallback (path) {
          common.log('github-request-path-error', path)
        }
      })

    }
  }
}
