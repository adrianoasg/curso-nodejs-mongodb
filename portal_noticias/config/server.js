const express = require('express')
const application = express()

application.set('view engine', 'ejs')
application.set('views', './app/views')

module.exports = application