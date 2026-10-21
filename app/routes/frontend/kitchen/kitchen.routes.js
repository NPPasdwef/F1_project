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

module.exports = router