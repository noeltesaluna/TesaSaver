const {Budget, Bucket, Reserve} = require('../models/index')

exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.findAll({
            include: {
                model: Bucket,
                    include: {
                    model: Reserve
                }
            }
        });
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.updateBudget = async (req, res) => {
    const id = req.params.id;
    const { budget_name, budget_amount, start_date, end_date } = req.body;
    try {
        const budget = await Budget.findByPk(id)
        if (!budget) {
            res.status(404).json({ error: 'Todo not found' });
        } else {
            budget.budget_name = budget_name
            budget.budget_amount = budget_amount
            budget.start_date = start_date
            budget.end_date = end_date
            await budget.save()
            res.json(budget)
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
};