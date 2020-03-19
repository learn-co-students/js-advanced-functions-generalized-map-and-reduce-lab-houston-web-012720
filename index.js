function map(arr, func) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]))
  }
  return result
}

function reduce(arr, func, acc) {
  let result = (!!acc) ? acc : arr[0]
  let i = (!!acc) ? 0 : 1

  for (i = i; i < arr.length; i++) {
    result = func(arr[i], result)
  }
  return result
}
