function countDown(n) {
    let array = [];
    for (let i = n; i >= 1; --i) {
        array.push(i)
    }
    return array.join('')
}
