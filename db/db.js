const mysql = require('mysql2')
require('dotenv').config()
// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'poly_database',
    password: '12345678',
})

module.exports = connection.promise()
