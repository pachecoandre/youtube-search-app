const { config } = require('dotenv')
config({ path: './config/.env' })
const { getVideos } = require('./services/getVideos')
getVideos('acdc')