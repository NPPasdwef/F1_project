const express = require("express")
const router = express.Router()
const path = require('path')

router.get('/login', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/auth/login.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/register', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/auth/register.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})


module.exports = router