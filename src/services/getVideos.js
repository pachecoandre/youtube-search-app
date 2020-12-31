const axios = require('axios')

const getVideos = async (searchTerm, searchLimit = 200) => {
    const videoIds = []
    const key = process.env.GAPI_YOUTUBE_KEY

    console.log(key)

    console.log('requesting first page')

    const firstPageRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchTerm}&maxResults=50&type=video&key=${key}`)
    let searchList = firstPageRes.data
    let nextPage = searchList.nextPageToken
    let items = searchList.items

    if (items) {
        for (const video of items) {
            if (video.id && video.id.videoId && videoIds.length <= searchLimit) {
                videoIds.push(video.id.videoId)
            }
        }
    }
    while (nextPage && videoIds.length < searchLimit) {

        console.log('requesting remaining pages')
        
        const remainingPagesRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchTerm}&maxResults=50&type=video&pageToken=${nextPage}&key=${key}`)
        searchList = remainingPagesRes.data
        nextPage = searchList.nextPageToken
        items = searchList.items
        if (items) {
            for (const video of items) {
                if (video.id && video.id.videoId && videoIds.length <= searchLimit) {
                    videoIds.push(video.id.videoId)
                }
            }
        }
    }
    console.log(videoIds.length, 'videos found')
}

module.exports = {
    getVideos
}