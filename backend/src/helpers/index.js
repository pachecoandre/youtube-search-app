/** * 
 * @returns time in minutes
 * 
 * @param {string} gDuration duration in google format. e.g. PT10M25S
 */
const formatDuration = (duration) => {
    let parts = duration.match(/\d+/g)
    duration = 0

    if (parts.length == 3) {
        duration = duration + parseInt(parts[0]) * 3600;
        duration = duration + parseInt(parts[1]) * 60;
        duration = duration + parseInt(parts[2]);
    }

    if (parts.length == 2) {
        duration = duration + parseInt(parts[0]) * 60;
        duration = duration + parseInt(parts[1]);
    }

    if (parts.length == 1) {
        duration = duration + parseInt(parts[0]);
    }
    return duration / 60 // seconds to minutes
}

const formatHHMMSS = (duration) => {
    let parts = duration.match(/\d+/g)

    if (parts.length == 3) {
        const hours = parts[0]
        const minutes = parseInt(parts[1]) < 10 ? `0${parts[1]}` : parts[1]
        const seconds = parseInt(parts[2]) < 10 ? `0${parts[2]}` : parts[2]
        return `${hours}:${minutes}:${seconds}`
    }
    if (parts.length == 2) {
        const minutes = parts[0]
        const seconds = parseInt(parts[1]) < 10 ? `0${parts[1]}` : parts[1]
        return `${minutes}:${seconds}`
    }
    if (parts.length == 1) {
        const minutes = '0'
        const seconds = parseInt(parts[0]) < 10 ? `0${parts[0]}` : parts[0]
        return `${minutes}:${seconds}`
    }

    return '0:00'
}

const normalizeText = (text = '') => {
    text = text.replace(/\(|\)|\"|\,|\.|\!|\?|\:|\;|\”|\“|\-|\d|#/g, '')
    return text.toLowerCase()
}

const sortAndCountWord = (text, delimiter) => {
    if (!text || !delimiter) {
        return false

    } else {
        var words = text.split(delimiter),
            count = []
        for (var i = 0, len = words.length; i < len; i++) {
            if (count.hasOwnProperty(words[i])) {
                count[words[i]] = parseInt(count[words[i]], 10) + 1;
            }
            else {
                count[words[i]] = 1
            }
        }
        count.sort()

        return Object.keys(count).map(k => [k, count[k]])
            .sort((a, b) => a[1] < b[1]).map(e => e[0])
    }
}

module.exports = {
    formatDuration,
    formatHHMMSS,
    normalizeText,
    sortAndCountWord
}