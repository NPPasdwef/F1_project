const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['/assets/js/customer/menu.js']
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
router.get('/history', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/history.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/menu-detail', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/menu-detail.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['/assets/js/customer/menu-detail.js']
    })
})
router.get('/order-status', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/order-status.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
module.exports = router