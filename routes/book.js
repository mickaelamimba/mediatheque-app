const express = require('express');
const {getBooks, postBook} = require("../controllers/book");
const router = express.Router();

/* GET home page. */

router.get('/books',getBooks)
router.post('/book-post',postBook)
module.exports = router;