const studentRepo = require('../repository/studentRepo')
const studentService = {}
studentService.getAll = async () => {
    const row = await studentRepo.getAll()
    console.log(row)
    return row
}

module.exports = studentService
