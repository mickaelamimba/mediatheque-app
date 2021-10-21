const express = require('express');
const {loanCreat,loanGet} = require("../controllers/loan");
const router = express.Router();

router.get('/loan',loanGet)
router.post('/loan-create',loanCreat)


module.exports = router