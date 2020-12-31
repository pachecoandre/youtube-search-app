const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getVideos } = require('../services/getVideos')

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
        this.app.get('/videos', async (req, res) => {
            const searchTerm = req.query.q
            const videos = await getVideos(searchTerm)
            res.send(videos)
        })
    }
    listen () {
        this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`))
    }
}

module.exports = Server