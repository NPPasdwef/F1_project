const express = require('express')
const router = express.Router()
const review = require('../../../controller/review/review.controller')

router.get('/', review.reviews)

module.exports = router
