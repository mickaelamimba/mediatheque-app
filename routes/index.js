const express = require('express');
const {getBooks} = require("../controllers/book");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/books',getBooks)


module.exports = router;
