const {Budget, Bucket, Reserve} = require('../models/index')

exports.createBudget = async (req, res) => {
    const { budget_name, budget_amount, start_date, end_date } = req.body;
    try {
        const budget = await Budget.create({
            "budget_name": budget_name,
            "budget_amount": budget_amount,
            "start_date": start_date,
            "end_date": end_date,
        })
        res.json(budget)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.updateBudget = async (req, res) => {
    const id = req.params.id;
    const { budget_name, budget_amount, start_date, end_date } = req.body;
    try {
        const budget = await Budget.findByPk(id)
        if (budget == null) {
            res.status(404).json({ error: 'Budget not found' });
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

exports.deleteBudget = async (req, res) => {
    const id = req.params.id;
    try {
        const budget = await Budget.findByPk(id)
        if (budget == null) {
            res.status(404).json({ error: 'Budget not found' });
        } else {
            await budget.destroy()
            res.json(budget);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

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

exports.getBudget = async (req, res) => {
    const id = req.params.id;
    try {
        const budgets = await Budget.findAll({
            where: {'budget_id': id},
            include: {
                model: Bucket,
                    include: {
                    model: Reserve
                }
            }
        });
        const budget = budgets[0]
        if (budget == null) {
            res.status(404).json({ error: 'Budget not found' });
        } else {
            res.json(budget);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
};