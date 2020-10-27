const express = require('express')
const PORT = 3000

var app = express()

app.use("/", async (req, res, next) => {
    console.log(req, url);
    next()
})

app.get()
