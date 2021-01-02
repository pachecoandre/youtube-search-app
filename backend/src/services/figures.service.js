const { normalizeText, formatDuration } = require('../helpers')

/**
 * Returns the duration in days for watching all videos
 * 
 * @param {number[]}} weekConfig 
 * @param {number} videoDurations 
 */
const calculateDays = (weekConfig, videoDurations) => {

    if (!weekConfig || !Array.isArray(weekConfig) || weekConfig.length === 0 || !videoDurations) return 0

    console.log('calculating days')

    let totalDays = 0
    const durationLimit = Math.max(...weekConfig)

    while (videoDurations.length > 0) {
        for (let dI = 0; dI < weekConfig.length; dI++) {
            const dayTime = weekConfig[dI]

            const dayState = {
                maxTime: dayTime,
                videosToWatch: [],
                getRemainingTime() {
                    const reducer = (remainingTime, videoTime) => remainingTime - videoTime
                    return this.videosToWatch.reduce(reducer, this.maxTime)
                }
            }
            for (let durI = 0; durI < videoDurations.length; durI++) {
                const duration = videoDurations[durI]

                if (duration > durationLimit) {
                    // Ignore large videos
                    videoDurations.shift()
                    durI--

                } else if (dayState.getRemainingTime() < duration) {
                    // Day is already full
                    break

                } else {
                    // Include video
                    const durationToInclude = videoDurations.shift() // removes the first video of videos array
                    durI--
                    dayState.videosToWatch.push(durationToInclude)
                }
            }
            // console.log('day', totalDays + 1, dayState.videosToWatch)
            totalDays++

            if (videoDurations.length === 0) break
        }
    }
    return totalDays
}

const frequentWords = (records) => {

    let titleCounts = {}
    let descripCounts = {}

    const wordCounter = (str, wordCounts = {}) => {
        let words = str.split(/\s|\n/)
        words = words.filter(word => !!word)

        for (var i = 0; i < words.length; i++) {
            wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1
        }
        return wordCounts
    }

    const sortDict = (dict) => {
        // Create items array
        let items = Object.keys(dict).map(function (key) {
            return [key, dict[key]];
        })
        // Sort the array based on the second element
        items.sort(function (first, second) {
            return second[1] - first[1];
        })
        // Create a new array with only the first 5 items      
        return items.slice(0, 5)
    }

    records.forEach(record => {
        const title = record.title && normalizeText(record.title) || ''
        titleCounts = wordCounter(title, titleCounts)

        const description = record.description && normalizeText(record.description) || ''
        descripCounts = wordCounter(description, descripCounts)
    })

    // Sort
    titleCounts = sortDict(titleCounts)
    descripCounts = sortDict(descripCounts)

    return {
        titleCounts,
        descripCounts
    }
}

const getFigures = (videos, weekConfig) => {
    let videoDurations = []

    videos = videos.map(video => {
        const duration = video.contentDetails && video.contentDetails.duration || 'PT0S'
        videoDurations.push(formatDuration(duration)) // duration in minutes
        return {
            title: video.snippet && video.snippet.title,
            description: video.snippet && video.snippet.description,
            thumbnail: video.snippet && video.snippet.thumbnails && video.snippet.thumbnails.default,
            url: video.id && `https://www.youtube.com/watch?v=${video.id}` || 'https://www.youtube.com',
            duration
        }
    })

    const days = calculateDays(weekConfig, videoDurations)
    const words = frequentWords(videos)

    return {
        watchDuration: days,
        frequentWords: words,
        videos
    }
}

module.exports = { getFigures }