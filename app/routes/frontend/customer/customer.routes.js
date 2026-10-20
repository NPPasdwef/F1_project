const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [], // เช่น '/assets/css/home.css'
        scripts: ['/assets/js/customer/index.js'],
    });
});

router.get('/cart', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/cart.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [],
        scripts: [],
    });
});

module.exports = router
