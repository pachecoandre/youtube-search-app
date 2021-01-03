const axios = require('axios')

/**
 * Returns a list of videos from Youtube
 * 
 * @param {string} searchTerm
 * @param {number[]} weekConfig
 * @param {number=} searchLimit 
 */
const getVideos = async (searchTerm, searchLimit = 200) => {

    const videoIds = []
    const key = process.env.GAPI_YOUTUBE_KEY

    console.log('requesting videos')

    const firstPageRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchTerm}&maxResults=50&type=video&key=${key}`)
    let searchList = firstPageRes.data
    let nextPage = searchList.nextPageToken
    let items = searchList.items

    if (!items) {
        // no results
        console.log('No results')
        return []
    }
    for (const video of items) {
        if (video.id && video.id.videoId && videoIds.length <= searchLimit) {
            videoIds.push(video.id.videoId)
        }
    }
    while (nextPage && videoIds.length < searchLimit) {

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

    const batches = []
    const batchSize = 50

    for (let i = 0; i < videoIds.length; i += batchSize) {
        const batch = videoIds.slice(i, i + batchSize)
        batches.push(batch)
    }

    let requests = batches.map(batch => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${batch}&key=${key}`)
    })

    console.log(`found ${videoIds.length} videos`)

    const videoInfos = await Promise.all(requests)

    let videos = []

    videoInfos.forEach(videoInfosRes => {
        const videosList = videoInfosRes.data && videoInfosRes.data.items
        videos = [...videos, ...videosList]
    })

    return videos
}

module.exports = { getVideos }