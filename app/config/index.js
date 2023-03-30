const pkg = require('../../package.json')
require('dotenv').config()

const config = {
    db: {
        mysql: {
            database: process.env.MYSQL_DB_NAME,
            username: process.env.MYSQL_DB_USER,
            password: process.env.MYSQL_DB_PASS,
            host: process.env.MYSQL_DB_HOST,
            port: process.env.MYSQL_DB_PORT,
        },
    },
}
module.exports = config
