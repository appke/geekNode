// 返回网页
const http = require('http')
const config = require('./config').config
const fs = require('fs')


const server = http.createServer((req, res) => {
  
  fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) {
    if (err) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end('Not Founded.')
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data);
    }
  })
})

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`)
})