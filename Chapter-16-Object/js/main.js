// Object 
// key-value pairs in curly braces

const myObj = {
// key-value pairs in curly braces
  name: 'saru',
  age: 25,
  gender: 'male'
}
console.log(myObj); // {name: 'saru', age: 25, gender: 'male'}

console.log(myObj.name); // saru

console.log(myObj['gender']); // male

console.log('====================================');
console.log('***********************************************');
console.log('====================================');

// 02
const obj = {
  subscriber: true,
  no: 10,
  content: {
    earn: 'JS',
    grow: 'Stocks'
  },
  subdivision: ['Earn', 'Grow', 'Give']
}

console.log(obj.subscriber) // true
console.log(obj.no) // 10
console.log(obj.content) // {earn: 'JS', grow: 'Stocks'}
console.log(obj.content.earn) // JS
console.log(obj.content.grow) // Stocks
console.log(obj.subdivision) //  ['Earn', 'Grow', 'Give']
console.log(obj.subdivision[0]) // Earn
console.log(obj.subdivision[1]) //Grow
console.log(obj.subdivision[0]) // Give

console.log('====================================');
console.log('***********************************************');
console.log('====================================');

// 03 
const object = {
  subscriber: true,
  no: 10,
  content: {
    earn: 'JAVA',
    grow: 'Stocks'
  },
  subdivision: ['Earn', 'Grow', 'Give'],
  //function 
  action: function() {
    // return ('Hello World')
    // use this keyWord
    return `Earn By Learnig ${this.content.earn}`
  }
}

// console.log(object.action()) // Hello World
console.log(object.action()) // Earn By Learnig JAVA 

console.log('====================================');
console.log('***********************************************');
console.log('====================================');

// 04
const vechile = {
  doors: 2,
  engine: function() {
    return "Vrrrromm"
  },
}
console.log(vechile.engine()) // Vrrrromm

//  Incarried
const car = Object.create(vechile)
car.wheels = 4

console.log(vechile.engine()) // Vrrrromm
console.log('***********************************************');

console.log(car.wheels) // 4
console.log('***********************************************');

console.log(car.doors) // 2
console.log('***********************************************');

const tesla = Object.create(car) 

console.log(tesla.doors) // 2

console.log('====================================');
console.log('***********************************************');
console.log('====================================');


// 05 
const movie = {
  title: 'The Dark Knight',
  year: 2019,
  actor: 'Kavin',
  music: 'Arr',
  director: "Lokesh",
  producer: 'Anbu'
}
console.log(Object.keys(movie)) // ['title', 'year', 'actor', 'music', 'director', 'producer'] 
console.log(Object.values(movie)) // ['The Dark Knight', 2019, 'Kavin', 'Arr', 'Lokesh', 'Anbu']

// for-in loop
for (let job in movie) {
  // console.log(movie[job]) // Kavin
  //                         // Arr
  //                         // Lokesh
  //                         // Anbu


  console.log(`${job}, It's ${movie[job]}`)
  // title, It's The Dark Knight
  // year, It's 2019
  // actor, It's Kavin
  // music, It's Arr
  // .........
}