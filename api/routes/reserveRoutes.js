const express = require('express')
const router = express.Router();
const reserveController = require('../controllers/reserveController')

router.get('/', reserveController.getAllReserves)

module.exports = router