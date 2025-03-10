const {Budget, Bucket} = require('../models/index')

exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.findAll({
            include: Bucket
        });
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createTestBudget = async (req, res) => {
    try {
        const budgets = await Budget.create({budget_name: "test"});
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}