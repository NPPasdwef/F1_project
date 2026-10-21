const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/kitchen/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/history', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/kitchen/history.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/preparing', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/kitchen/preparing.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/ready', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/kitchen/ready.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})

module.exports = router