const express = require('express');
const router = express.Router();

router.get("/me", require("../../../controller/auth/auth.controller").me)

module.exports = router;
