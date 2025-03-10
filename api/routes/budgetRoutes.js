const express = require('express')
const router = express.Router();
const budgetContoller = require('../controllers/budgetController')

router.get('/', budgetContoller.getAllBudgets)

module.exports = router