// objects ( associative array: key: value pair store)
// 2 ways use them
// 1. to describe one thing like a person or a car
// 2. dictionary/ translation  key(word) value: definitio



let paul = {name:'Paul', age:22}
let george = {name:'George', age:42}
let jill = {name:'Jill', age:12}

// console.log(paul.age)
console.log(typeof true);

let people = [paul, george, jill]

// find the average age
let sum = 0;
people.forEach((person)=>{
   sum += person.age
})

let average = sum/people.length
console.log(average)

// get a array of strings that say
// 'hi I am 'name' and I am 'age' years old

const getInfo = (person)=>{
    return `<h1>Hello I am ${person.name} and I am ${person.age} years old</h1>`
}

let peopleStrings = []
people.forEach((person)=>{
    peopleStrings.push(`<p>Hello I am ${person.name} and I am ${person.age} years old</p>`)
})
console.log(peopleStrings)

// foreach goes through each thing and performs the function you pass it, it return undefined

// map goes through each thing and performs the function you pass it, what this function returns
// will be added to a new array and a end map returns that array
// map is used when you want convert an array of one thing to another [x,x,x] =>[y,y,y]
let peoplesHTML = people.map(getInfo)
console.log(peoplesHTML)


const isOver21 = (person) =>{
    return person.age >=21
}

// filter goes each of the things, if the function returns true we keep the thing
// [x,x,x] =>[x,x]
let peopleOver21 = people.filter(isOver21)
console.log(peopleOver21)
// let paulInfo = getInfo(paul)
// console.log(paulInfo)

// console.log(getInfo({name:'TONY'}))

// ['Hello I am Paul and I am 22 years old','Hello I am George and I am 42 years old']