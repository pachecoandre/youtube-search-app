const { Router } = require('express')
const { getVideos } = require('../services/getVideos')

const router = Router()

router.get('/videos', async (req, res) => {
    const searchTerm = req.query.q
    const weekConfig = req.query.weekConfig
    const videos = await getVideos(searchTerm, weekConfig)
    res.send(videos)
})

module.exports = {
    router
}