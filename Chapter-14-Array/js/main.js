// Arrays 

const array = []
// adding Array Element



array[0] = 'sk'
array[1] =  'lk'
array[3] =  'Mk'
array[4] = 25

 array.push('Hello')
 array.push(123)

console.log(array) // ['sk', 'lk', empty, 'Mk', 25, 'Hello', 123]
console.log(array.length) // 7
console.log(array[1]) // lk
console.log(array[2]) // undefined

// Delete Last element
array.pop()
console.log(array) // ['sk', 'lk', empty, 'Mk', 25, 'Hello']

// front Add
array.unshift('clicks')
console.log(array) // ['clicks', 'sk', 'lk', empty, 'Mk', 25, 'Hello']

// Delete Frist Element
array.shift()
console.log(array) // ['sk', 'lk', empty, 'Mk', 25, 'Hello']


