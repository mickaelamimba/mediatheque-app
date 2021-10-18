const express = require('express');
const router = express.Router();
const {customerGet, customerCreat, customerDelete, customerUpdate} = require("../controllers/customer");


router.get('/',customerGet)
router.post('/customer-post',customerCreat)
router.post('/customer-delete',customerDelete)
router.post('/customer-update',customerUpdate)

module.exports = router