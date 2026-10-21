const express = require('express');
const path = require('path');
const router = express.Router();

// Home
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../../../views/page/index.ejs'), {
    layout: path.join(__dirname, '../../../views/layouts/main.layout.ejs'),
    styles: [], // เช่น '/assets/css/home.css'
    scripts: ['/assets/js/index.js'], // เช่น '/assets/js/home.js'
  });
});
router.use('/customer', require('./customer/customer.routes.js'))
router.use('/admin', require('./admin/admin.routes.js'))
router.use('/auth', require('./auth/auth.routes.js'))
router.use('/cashier', require('./cashier/cashier.routes.js'))
router.use('/kitchen', require("./kitchen/kitchen.routes.js"))
module.exports = router;
