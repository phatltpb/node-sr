const config = require('../config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.db.mysql.database,
    config.db.mysql.username,
    config.db.mysql.password,
    {
        host: config.db.mysql.host,
        dialect: 'mysql',
    }
)
module.exports = {
    init: async (callback) => {
        try {
            await sequelize.authenticate()
            console.log(
                'Connection has been established successfully.'
            )
            callback(null)
        } catch (err) {
            callback(err)
        }
    },
    instanse: sequelize,
    sequelize: sequelize,
    Sequelize: Sequelize,
}
