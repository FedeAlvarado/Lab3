let input = [
    { name: "John", age: 21, city: "New York", population:500000 },
    { name: "Mike", age: 28, city: "Moscow", population:500000 },
    { name: "Danny", age: 30, city: "London", population:500000 },
    { name: "Lisa", age: 26, city: "Paris", population:500000 },
    { name: "Sophie", age: 19, city: "Berlin", population:500000 },
    ];

let names = input.map(n => n.name)
let ages = input.filter(person => person.age>20 && person.age<29)
console.log(names)
console.log(ages)

let country = names.sort((a,b) => b - a )