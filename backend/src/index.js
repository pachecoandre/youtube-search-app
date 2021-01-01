const { config } = require('dotenv')
config({ path: './config/.env' })
const Server = require('./server/main.server')

const server = new Server(process.env.PORT)
server.route()
server.listen()