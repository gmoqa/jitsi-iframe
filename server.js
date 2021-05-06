const express = require('express')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))
app.listen(process.env.PORT)