let config = require('/Users/kyle/global-config/global-config')
exports.serverOptions = config.mongoService.serverOptions
exports.mongo = config.mongoService.mongo

exports.sissionOption = config.mongoService.sissionOption
exports.mysql = {
  webascii: config.server.mysql
}
exports.server = config.server
