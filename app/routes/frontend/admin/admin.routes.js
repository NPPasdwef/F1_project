const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/admin/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/audit-logs', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/admin/audit-logs.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/categories', (req, res) => {
    res.render(path.join(__dirname, '../../.../../../../views/page/admin/categories.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/menu-options', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/admin/menu-options.ejs'), {
        layout: path.join(__dirname, "../../../../views/layouts/main.layout.ejs"),
        styles: [''],
        scripts: ['']
    })
})
router.get('/menu', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/admin/menu.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/orders', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/admin/orders.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
module.exports = router