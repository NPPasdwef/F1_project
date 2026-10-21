const express = require("express")
const router = express.Router()
const path = require("path")
router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/cashier/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})
router.get('/bill-summary', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/cashier/bill-summary.ejs'), {
        layout: path.join(__dirname, '../.../../../../../views/layouts/main.layout.ejs'),
        styles: [''],
        scripts: ['']
    })
})

module.exports = router