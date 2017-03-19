var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // api:'"http://localhost/blog-api/"'
  api:'"http://evanhung.me:/blog-api/"'
})
