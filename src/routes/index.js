const { Router } = require('express')
const { getVideos } = require('../services/getVideos')

const router = Router()

router.get('/videos', async (req, res) => {
    const searchTerm = req.query.q
    const videos = await getVideos(searchTerm)
    res.send(videos)
})

module.exports = {
    router
}