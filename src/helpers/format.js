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

module.exports = {
    formatDuration
}