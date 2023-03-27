const mongoose = require('mongoose')
const studentModel = require('../../test0/es6_project_back-end/src/models/studentModel')
require('dotenv').config()
string_connection = process.env.DB_STRING

exports.conection = async () => {
    await mongoose
        .connect(string_connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        })
        .then(() => console.log('Connected!'))
}
module.exports = mongoose.model('student', studentModel)
