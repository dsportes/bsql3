// const path = require('path')
// module.exports = {
// import path from 'path'
import os from 'os'
export default {
  entry: './app.js',
  target: 'node',
  mode: 'production',
  output: {
    filename: 'app.js',
    path: os.homedir() + '/tmp/dist',
  },
  externals: {
    // 'better-sqlite3': 'commonjs better-sqlite3' // Cannot find module 'better-sqlite3'
    // without the line above: TypeError: Cannot read properties of undefined (reading 'indexOf')
  }
}
