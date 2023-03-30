const express = require('express')
const router = express.Router()
// routers
const studentRouter = require('./studentRouter')

router.use(`/student`, studentRouter)

module.exports = router
