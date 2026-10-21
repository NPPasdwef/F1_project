const express = require("express")
const router = express.Router()
const path = require("path")
const { Script } = require("vm")

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/cart', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/cart.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/checkout', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/checkout.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
module.exports = router