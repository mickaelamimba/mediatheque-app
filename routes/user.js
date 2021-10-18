const express = require('express');
const router = express.Router();
const {userGet, userCreat, userUpdate, userDelete, userLogin} = require("../controllers/user");

router.get('/users',userGet)
router.post('/user-post',userCreat)
router.post('/login',userLogin)
router.post('/user-update',userUpdate)
router.post('/user-delete',userDelete)
module.exports = router;
