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

    let batches = []

    const batchSize = 50

    for (let i = 0; i < videoIds.length; i += batchSize) {
        const batch = videoIds.slice(i, i + batchSize)
        
    }



    let requests = batches.map(batch => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${batch}&key=${key}`)
    })
    
    requests.slice(0, 50)

    for (let index = 0; index < requests.length; index += 50) {

        // const batch = []
        // firstIndexReq = requests.shift()
        // batch.push(firstIndexReq)
    }



    console.log(videoIds.length, 'videos found')
}

module.exports = {
    getVideos
}