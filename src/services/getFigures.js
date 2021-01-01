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

module.exports = {
    calculateDays
}