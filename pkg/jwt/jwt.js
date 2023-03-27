const jwt = require('jsonwebtoken')
require('dotenv').config()
console.log(process.env.SECRET_KEY)
class JWT {
    constructor() {
        this.secret_key = process.env.SECRET_KEY
        this.time_jwt = process.env.TIME_KEY
    }
    Encode(data = { id: '' }) {
        return jwt.sign(data, this.secret_key, {
            expiresIn: this.time_jwt,
            // algorithm: 'RS256',
        })
    }
    DeCode(token) {
        try {
            return jwt.verify(token, this.secret_key)
        } catch (error) {
            return null
        }
    }
}

module.exports = JWT
