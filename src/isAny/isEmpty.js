module.exports = (obj) => {
    var key;
    for (key in obj) {
        return false;
    }
    return true;
}