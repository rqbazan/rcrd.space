const getModuleNameMapper = require('tsconfig-paths-jest')
const tsconfig = require('./tsconfig.json')

module.exports = {
  verbose: true,
  moduleNameMapper: getModuleNameMapper(tsconfig),
}
