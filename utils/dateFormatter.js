const fs = require('fs');
function formatDate(date) {
    let options = {month: 'long', day: '2-digit', year: 'numeric'}
    return date.toLocaleDateString("en-US", options);
}
function getModifiedDate(filepath) {
    const stats = fs.statSync(filepath);
    return formatDate(stats.mtime);
}

module.exports = {
    formatDate,
    getModifiedDate
}