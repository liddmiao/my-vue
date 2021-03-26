const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req, res) => {
  if (req.url == '/') {
    const home = fs.readFileSync('../dist/index.html')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(home)
  } else if (req.url == '/test') {
    res.statusCode = 200
    res.end('hello')
  } else if (req.url =='/favicon.ico'){
    res.statusCode = 404
    res.end()
  }else {
    const url = req.url
    const filepath = path.resolve(__dirname, '../dist/' + url)
    const file = fs.readFileSync(filepath)
    if(url.indexOf('js') > -1) {
      res.setHeader('Content-Type', 'application/x-javascript')
    } else {
      res.setHeader('Content-Type', 'text/css')
    }
    res.statusCode = 200
    res.end(file)
  }
}).listen(3001)