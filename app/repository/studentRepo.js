// const db = require('../db/db')
var student = require('../models/students')(
    sequelize,
    DataTypes
)
const StudentRepo = {}

// get all data
StudentRepo.getAll = async () => {
    // const [row, fileds] = await db.execute(
    //     `select * from students`
    // )
    const row = await student.findAll({
        raw: true,
    })
    return row
}
// // get one data
// StudentRepo.getOne = async (id) => {
//     const [row, fileds] = await db.execute(
//         `select * from students where id = ?`,
//         [id],
//         (err, fileds) => {}
//     )
//     return fileds
// }
// // create newdata
// StudentRepo.Create = async (data) => {
//     const create = await db.execute(
//         `insert into students('name','phone','number') values()`,
//         [data.name, data.phone, data.number]
//     )
//     return create
// }
// //update data
// StudentRepo.Update = async (data) => {
//     const update = await db.execute(
//         'update students set ? = ? where id = ?'
//     )
// }
// // delte data
// StudentRepo.Delete = async (id) => {
//     const dl = await db.execute(
//         'Delete from sutdents where id = ?',
//         [id]
//     )
//     return dl
// }
module.exports = StudentRepo
