const express = require('express')
const studentRouter = express.Router()
const studentcontroller = require('../controllers/studentCtl')
studentRouter.route('/:id').get(studentcontroller.getAll)
module.exports = studentRouter
