const express = require('express')
const router = express.Router()
const restaurant = require('../../../controller/restaurant/restaurant.controller.js')
router.get('/overview', restaurant.overviws)
router.get('/signature', restaurant.signature)
router.get('/promotion', restaurant.promotion)
router.get('/menu', restaurant.menu)
// router.get('/menu_detail', restaurant.menu_detail)
router.get('/menu_detail/:id', restaurant.menu_detail)

module.exports = router
