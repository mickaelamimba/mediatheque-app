const express = require('express');
const {loanCreat} = require("../controllers/loan");
const router = express.Router();

router.post('/',loanCreat)


module.exports = router