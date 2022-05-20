let people = ['George', 'Paul', 'Sally']

// mutations (side effect)
// add something to an array
// people.push('Jill')

// [x,x,x,x,x] =func=>[y,y,y,y,y]



// when we get to react we are not going to want to add this
// no mutation..

// does not change people no side effect/mutation
let newPeople = [...people,'frank']


console.log(people)
console.log(newPeople)

const wrapInHeader = (str)=>{
    return `<h1>${str}</h1>`
}


const header1 = wrapInHeader('YO')
console.log(header1)

// map return a new array (doesn't mutate the array it was called on)
const peopleHeaders = people.map(wrapInHeader)
console.log(peopleHeaders)
console.log(people)


const getCharArray = (str)=>{
    return str.split('')
}

let chars = getCharArray('helllo')
console.log(chars)

let nameArrays = people.map(getCharArray)
console.log(nameArrays)
// [[][][]]
nameArrays.forEach(nameArray=>{
    console.log(nameArray.join('-'))
    nameArray.forEach((letter)=>{
        console.log(letter)
    })
})

let x = {
    d:[1,2,3,{t:{y:'YAY'}},4],
    s:{q:[1,2,3,5,6,7,8,9,10]}
}

console.log(x.d[3].t.y)
let greaterThan5 = x.s.q.filter((num)=> {
    return num >=5
})
console.log(greaterThan5)