const { config } = require('dotenv')
config({ path: './config/.env' })
const { getVideos } = require('./services/getVideos')
const Server = require('./server/main.server')

const server = new Server(process.env.PORT)
server.route()
server.listen()

// getVideos('acdc')