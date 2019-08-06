const express = require('express')
const consign = require('consign')

const application = express()

application.set('view engine', 'ejs')
application.set('views', './app/views')

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(application)

module.exports = application