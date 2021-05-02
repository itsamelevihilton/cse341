
module.exports = {
    formatDate: (date)=> {
        let options = {month: 'long', day: '2-digit', year: 'numeric'}
        return date.toLocaleDateString("en-US", options);
    }
}