const Router = require('express').Router

var router = Router()

const users = []

router.get("/", (req, res) => {
    res.send("")
})

router.post("/register", (req, res) => {
    var { username, password } = req.query

    if (!username || !password) {
        res.send("Need username and password")
        return
    }
    users.push({ username, password })
    res.send("Registerd successfully")
})

router.post("/login", (req, res) => {
    var { username, password } = req.query

    if (!username || !password) {
        res.send("Need username and password")
        return
    }

    var user = users.find(el => el.username.toLowerCase() == username.toLowerCase())

    if (!user) {
        res.send("Bad credentials")
        return
    }

    if (user.password == password) {
        res.send("Logged in!")
    } else {
        res.send("Bad credentials")
    }
})

module.exports = router