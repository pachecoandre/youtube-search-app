const { Router } = require('express')
const { getInfo } = require('../services/main.service')

const router = Router()

router.get('/videos', async (req, res) => {
    const searchTerm = req.query.q
    const weekConfig = JSON.parse(req.query.weekConfig)

    const videos = await getInfo(searchTerm, weekConfig)
    res.send(videos)
})

module.exports = {
    router
}