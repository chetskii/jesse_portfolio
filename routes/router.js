const
    express = require('express'),
    portfolioRouter = new express.Router(),
    portfolioCtrl = require('../controllers/controller.js')

portfolioRouter.get('/', portfolioCtrl.index)

module.exports = portfolioRouter;