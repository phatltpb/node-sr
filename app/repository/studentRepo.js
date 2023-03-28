const db = require('../../db/db')
const StudentRepo = {
    getAll: async (req, res) => {
        try {
            const [row, fileds] = await db.execute(
                'select * from students'
            )
            res.json({
                data: row,
            })
        } catch (error) {
            res.json({
                data: 'err',
            })
        }
    },
}
module.exports = StudentRepo
