const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routers')
const app = express()
const database = require('./db/db')
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
dotenv.config()
const port = process.env.PORT_APP || 3000
database.init(async (err) => {
    if (err) {
        console.error('database start fail:', err)
        return
    }
    app.use('/api/v1', router)
    app.listen(port, function () {
        console.log(
            `server start successfully on port: ${port}`
        )
    })
})
