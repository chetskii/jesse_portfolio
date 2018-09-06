require('dotenv').config()

const
    express = require('express'),
    logger = require('morgan'),
    app = express(),
    PORT = 3000,
    mongoose = require('mongoose'),
    router = require('./routes/router.js')

mongoose.connect(process.env.MONGODB_URI, (err) => {
    console.log(err || "Connected to MongoDB.")
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.static('public'))

app.use('/api/portfolio', router)

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT} 🍺`)
})