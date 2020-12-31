const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

class Server {
    constructor(port) {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors())
        this.port = port || 3000
    }
    route () {
        this.app.get('/', (req, res) => {
            res.send('Welcome')
        })
    }
    listen () {
        this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`))
    }
}

module.exports = Server