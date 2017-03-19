var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var config = require('./index')
var port = 8080;
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  port:port,
  // api:'"http://localhost/blog-api/"'
  api:'"http://evanhung.me/blog-api/"'
})
