function map(arr, fn){
  for (let i = 0; i < arr.length; i++){
    arr[i] = fn(arr[i])
  }
  return arr
}



function reduce (arr, fn, start){
  // let val 
  // start ? val = start : val = arr[0]
  // for (let i = 0; i < arr.length; i++) {
  //   val = fn(val, arr[i])
  // }
  // return val
  // THIS DOESNT WORK WITH SUMMING

  let val 
  if (start){
    val = start
    for (let i = 0; i < arr.length; i++) {
      val = fn(val, arr[i])
    }
    return val
  } else {
    val = arr[0]
    for (let i = 1; i < arr.length; i++) {
      val = fn(val, arr[i])
    }
    return val
  }
}
