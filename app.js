
require('dotenv').config()
const express = require('express')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const api = require('./login/middleware/api.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use("/api", api)

app.use(express.static(process.env.PUBLIC_PATH))

const httpsServer = https.createServer({
    key: fs.readFileSync(process.env.KEY_PATH),
    cert: fs.readFileSync(process.env.CERT_PATH)
}, app)

httpsServer.listen(process.env.PORT, () => console.log('listening on port ${process.env.PORT}'))
