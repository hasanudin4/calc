const express = require('express')
const router = express.Router();
const calculateController = require('./controllers/calculateController.js')

router.post('/calper', calculateController.luasPersegi)


module.exports = router;