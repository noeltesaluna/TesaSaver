const express = require('express')
const router = express.Router();
const budgetContoller = require('../controllers/budgetController')

router.get('/', budgetContoller.getAllBudgets)
router.put('/:id', budgetContoller.updateBudget)
router.delete('/:id', budgetContoller.deleteBudget)

module.exports = router