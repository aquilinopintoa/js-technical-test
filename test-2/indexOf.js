function indexOf(searchValue, fromIndex) {
    let index = 0;

    if ((typeof fromIndex === 'number')) {
        index = Math.max(0, fromIndex)
    }

    do {
        if (this.substring && this.substring(index, index + searchValue.length) === searchValue) {
            return index;
        }
        index++
    } while (index + searchValue.length <= this.length)

    return -1;
}

module.exports = indexOf;
