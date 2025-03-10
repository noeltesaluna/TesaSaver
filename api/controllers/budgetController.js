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