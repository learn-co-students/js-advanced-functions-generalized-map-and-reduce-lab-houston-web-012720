// Add your functions here
const map = (arr,func) => arr.map(e => e = func(e))

const reduce = (arr, func, st_point) => {
    let st_p = st_point ? st_point : arr.splice(0,1)[0]
    arr.forEach(element => st_p = func(element,st_p))
    return st_p
}