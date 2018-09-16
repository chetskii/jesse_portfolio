require('dotenv').config()

const
    express = require('express'),
    logger = require('morgan'),
    app = express(),
    PORT = 3000,
    mongoose = require('mongoose'),
    portfolioRouter = require('./routes/router.js'),
    ejsLayouts = require('express-ejs-layouts')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
    console.log(err || "Connected to MongoDB.")
})

app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.static('public'))
app.use(ejsLayouts)

app.use('/api/portfolio', portfolioRouter)
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT} 🍺`)
})