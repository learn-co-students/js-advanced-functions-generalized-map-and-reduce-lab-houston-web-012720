// Add your functions here

function map(array, callback) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(callback(array[i]))
    }
    return newarray
}

function reduce(array, callback, startpoint) {
    let acc = startpoint
    if (startpoint) {
        for (let i = 0; i < array.length; i++) {
            acc = callback(acc, array[i])
        }
    } else {
        acc = array[0]
        for (let i = 1; i < array.length; i++) {
            acc = callback(acc, array[i])
        }
    }
    return acc
}