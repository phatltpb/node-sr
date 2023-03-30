const studentService = require('../services/studentService')

const StudentsCtl = {}
StudentsCtl.getAll = async (req, res) => {
    data = await studentService.getAll()
    res.status(200).json({ data })
}
module.exports = StudentsCtl
