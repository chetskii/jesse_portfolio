const
    mongoose = require('mongoose'),
    portfolioSchema = new mongoose.Schema({
        body: String
    })

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio