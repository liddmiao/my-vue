const path = require('path')
const Koa = require('koa')
const fileServer = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const getRoutes = require('./controllers/routes')

const app = new Koa()

app.use(bodyParser())
// 静态文件服务
app.use(fileServer(path.resolve(__dirname, '../dist/')))

const router = new Router()
router.get('/getRoutes', getRoutes)
app.use(router.routes())

app.listen('3001')