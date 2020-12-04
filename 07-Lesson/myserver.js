const http = require('http')
const config = require('./config').config

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  console.log('req.url ----- ', req.url)
  if(req.url!=="/favicon.ico")
    console.log(req.url);
  switch(req.url) {
    case '/':
      res.end('Hello World!!')
      break
    case '/about':
      res.end('this is about page.')
      break
    case '/home':
      res.end('Wecome to my homepage!')
      break
    default:
      res.end('Not Found! 404')
  }
})

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`)
})

/*
req.url -----  /home
req.url -----  /favicon.ico
- 为什么多一次请求？
- 如何设置favicon.ico

<!DOCTYPE html>
<html lang=en><head><meta charset=utf-8>
<meta http-equiv=X-UA-Compatible content="IE=edge">
<meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta id=desc name=description content=宝能教学管理平台>
<link rel=icon href=/h5/study.ico><title>宝能教学管理平台</title></head>

*/

// https://blog.csdn.net/qq_24145735/article/details/50351132
// https://stackoverflow.com/questions/15463199/how-to-set-custom-favicon-in-express