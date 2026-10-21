const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/pos/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/order-detail', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/pos/order-detail.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/order-items', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/pos/order-items.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/order', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/pos/order.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/ready-to-serve', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/pos/ready-to-serve.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
router.get('/tables', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/pos/tables.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        style: [''],
        scripts: ['']
    })
})
module.exports = router