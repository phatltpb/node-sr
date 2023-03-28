const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routers')
const app = express()
const dbConnection = require('../db/db')
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// db connection
app.use('/api/v1', router)
app.all('*', (req, res, next) => {
    next(
        new AppError(
            'Can not find this route on server',
            404
        )
    )
})

// app.use(handlerError)

module.exports = app
