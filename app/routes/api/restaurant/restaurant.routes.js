const express = require('express')
const router = express.Router()
const restaurant = require('../../../controller/restaurant/restaurant.controller')
router.get('/overview', restaurant.overviws)
router.get('/signature', restaurant.signature)
router.get('/promotion', restaurant.promotion)
router.get('/menu', restaurant.menu)

module.exports = router
