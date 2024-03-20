// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function addOneToNumber(number) {
  return number + 1
}
console.log(addOneToNumber(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function stringToUppercase(myString) {
  const firstLetter = myString[0].toUpperCase()
  const restString = myString.slice(1)
  const result = firstLetter + restString
  return result
}
console.log(stringToUppercase('teST'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function greetName(name) {
  const firstLetter = name[0].toUpperCase()
  const restName = name.slice(1)
  const result = 'Hi, ' + firstLetter + restName + ' :)'
  return result
}
console.log(greetName('rebecca'))

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function countStringInArray(myArray) {
  let stringCounter = 0
  for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] !== 'string') {
      continue
    } else {
      stringCounter += 1
    }
  }
  return stringCounter
}
console.log(countStringInArray([1, 'robert', 'rebecca', 'test', 3, '4']))

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function addKeyAmazingEdward(myObject) {
  if (!('edward' in myObject)) {
    myObject.edward = 'amazing'
  }
  return myObject
}

console.log(addKeyAmazingEdward({ edward: 'fab' }))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addOneToNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: stringToUppercase, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greetName, // etc
  d: countStringInArray,
  e: addKeyAmazingEdward
}
