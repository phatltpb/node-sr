const studentService = require('../services/studentService')

exports.getAll = (req, res) => {
    try {
        res.json({ name: 'phat' })
    } catch (error) {
        res.json({ message: 'have some err' })
    }
}
