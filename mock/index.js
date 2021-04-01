const express = require('express')
const fs = require('fs')
const path = require('path')
const yaml = require('yamljs')
const api = require('./controllers/api.js')
const { connector } = require('swagger-routes-express')

const port = 3001
const app = express()
app.use(express.static('dist'))
// 读取swagger文件
console.log(api)
const apiDefinition = yaml.load(path.resolve(__dirname, 'swagger.yml'))
const connectSwagger = connector(api, apiDefinition)
connectSwagger(app)

app.listen(port)