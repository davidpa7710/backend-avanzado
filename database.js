const mongoose = require('mongoose')

require('dotenv').config({})

mongoose.connect(
    process.env.DB_PASSWORD
)

module.exports = {
    mongoose
}

