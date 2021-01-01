const { getVideos } = require('./videos.service')
const { getFigures } = require('./figures.service')

const getInfo = async (searchTerm, weekConfig) => {

    const videos = await getVideos(searchTerm)
    const figures = await getFigures(videos, weekConfig)

    return {
        watchDuration: figures.watchDuration,
        frequentWords: figures.frequentWords,
        videos: figures.videos
    }
}

module.exports = { getInfo }