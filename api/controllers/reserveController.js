const {Reserve} = require('../models/index')

exports.getAllReserves = async (req, res) => {
    try {
        const reserves = await Reserve.findAll();
        res.json(reserves);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};