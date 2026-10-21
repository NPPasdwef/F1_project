const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../../../views/page/customer/index.ejs'), {
        layout: path.join(__dirname, '../../../../views/layouts/main.layout.ejs')
    })
})
module.exports = router