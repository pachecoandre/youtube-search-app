const { wordCounter, normalizeText } = require('../helpers')

/**
 * Returns the duration in days for watching all videos
 * 
 * @param {number[]}} weekConfig 
 * @param {number} videoDurations 
 */
const calculateDays = (weekConfig, videoDurations) => {

    console.log('video durations', videoDurations)

    if (!weekConfig || !Array.isArray(weekConfig) || weekConfig.length === 0 || !videoDurations) return 0

    console.log('calculating days')
    console.log('weekConfig', weekConfig)
    console.log('videoDurations', videoDurations)

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

const videoRecords = [
    {
        "title": "AC/DC - Highway to Hell (Live At River Plate, December 2009)",
        "description": "Strap yourself in for the most thundering AC/DC tracks! Listen to the playlist now: https://ACDC.lnk.to/AreYouReadyYA!hth\n\nHighway to Hell\nBuy/Listen - https://lnk.to/ACDChth!hth\n\nAbout the album:\nHighway to Hell is the sixth studio album by Australian rock band AC/DC, released on July 27, 1979. It was the band's fifth internationally-released studio album and the sixth to be released in Australia. It was the last album featuring lead singer Bon Scott, who died early the following year.\n\nFollow AC/DC:\nSpotify - https://lnk.to/ACDChthSI!hth\nFacebook - https://lnk.to/ACDChthFI!hth\nTwitter - https://lnk.to/ACDChthTI!hth\nInstagram - https://lnk.to/ACDChthII!hth\nWebsite - https://lnk.to/ACDChthWI!hth",
        "duration": "PT4M45S"
    },
    {
        "title": "AC/DC - Back In Black (Official Video)",
        "description": "\"Back In Black\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\n'Cause I'm back, yes I'm back\nWell, I'm back, yes I'm back\nWell, I'm back, back\nWell, I'm back in black\nYes, I'm back in black\n\n#ACDC #BackInBlack #HD #Remastered #OfficialMusicVideo",
        "duration": "PT4M14S"
    },
    {
        "title": "AC/DC - Thunderstruck (Official Video)",
        "description": "Official music video for “Thunderstruck” by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nAbout the The Razor's Edge:\nAC/DC cracked the seal on the '90s with one of the best riffs of their career. That would be \"Thunderstruck,\" the opening track on The Razors Edge. In addition to \"Thunderstruck,\" the band brought out \"Moneytalks,\" probably the closest they ever came to writing a pop song. Then there was \"Are You Ready\" - one of their fiercest calls to action. The gritty edge and booming chants on this album were a welcome reminder for a new generation that pure, unadulterated rock 'n' roll was alive and well.\n\nLyrics:\nI was caught\nIn the middle of a railroad track (thunder)\nI looked round\nAnd I knew there was no turning back (thunder)\nMy mind raced\nAnd I thought what could I do? (thunder)\nAnd I knew\nThere was no help, no help from you (thunder)\nSound of the drums\nBeating in my heart\nThe thunder of guns (yeah)\nTore me apart\n\n\nYou've been thunderstruck\n\n\n#ACDC #Rock #Thunderstruck",
        "duration": "PT4M53S"
    }
]

const res = frequentWords(videoRecords)
console.log(res)

module.exports = {
    calculateDays,
    frequentWords
}