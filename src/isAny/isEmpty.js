const isEmpty = (obj) => {
    var key;
    for (key in obj) {
        return false;
    }
    return true;
}
module.exports = {isEmpty};