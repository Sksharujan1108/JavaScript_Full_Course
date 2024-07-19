// map() Array 

const number = [1, 2, 3, 4]

// value, index, array "map"
let num = number.map((value) => {
    return value *2 ;
})
console.log(num);

console.log('*********************************');

// 02

const users = [
    {
        name: 'John',
        age: 25,
        country: 'USA',
        salary: 25000
    },
    {
        name: 'sk',
        age: 25,
        country: 'canada',
        salary: 15000
    },
    {
        name: 'Ana',
        age: 30,
        country: 'UK',
        salary: 35000
    }
]
console.table(users)

console.log('*********************************');

let client = users.map ((value) => {
    return (
        value
    )
})
console.log(client)

console.log('*********************************');
