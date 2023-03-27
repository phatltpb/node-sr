const dotenv = require('dotenv')
const app = require('./app/app')
//config dotenv
dotenv.config()
const port = process.env.PORT_APP || 3000

app.listen(port, () => {
    console.log(`server run to port:${port}`)
})
