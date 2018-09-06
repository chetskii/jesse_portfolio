const
    express = require('express'),
    portfolioRouter = new express.Router(),
    portfolioCtrl = require('../controllers/controller.js')

router.get('/', portfolioCtrl.index)

module.exports = portfolioRouter