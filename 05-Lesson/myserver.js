// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello Node.js World!!\nHello Vue.js World!!\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

// 没改文件，要重新编译
// ➜  Lesson git:(main) ✗ node 05-myserver.js
// 浏览器访问：http://127.0.0.1:3000/


// 多处用到 -> 配置文件
const http = require('http')
const config = require('./config').config

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Node.js World!!\nHello Vue.js World!!\n')
})

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`)
})