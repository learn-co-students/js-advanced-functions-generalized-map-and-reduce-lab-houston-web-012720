// Add your functions here

let map = (array, func) => array.map(val => func(val))

let reduce = (array, func, star = 0) => array.reduce((total, value) => {return func(value,total)}, func(star, 0) === false? true : star)

// sourceArray = [1, 2, true, "razmatazz"]

// f = function(a, memo){ return a * memo}

// r = reduce(sourceArray, function(a, memo){ return !!a && !!memo})

// console.log(r)

// star = 0

// console.log(f(star)? star : 1)

// sourceArray = [1,2,3]

// f = (a,b) => a*b

// arr = [4,3,2,1]


// console.log(reduce(arr,f))