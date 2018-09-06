const Portfolio = require('../models/Portfolio.js')

module.exports = {

    index: (req, res) => {
        Portfolio.find({}, (err, allPortfolio) => {
            res.json(allPortfolio)
        })
    }

    // All other controller modules
    //          VVV
}