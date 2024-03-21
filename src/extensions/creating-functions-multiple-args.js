// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below

function numberSeries(lowerNumber, upperNumber) {
  const result = []
  for (let i = lowerNumber; i <= upperNumber; i++) {
    result.push(i)
  }
  return result
}
console.log(numberSeries(-5, 20))

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

function uppercaseExclamation(myString, myNumber) {
  myString = myString.toUpperCase()
  for (let i = 0; i < myNumber; i++) {
    myString += '!'
  }
  return myString
}
console.log(uppercaseExclamation('nuesse', 12))

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function increaseTimeByMinute(currentTime, addMinutes) {
  const time = currentTime.split(':')
  const hours = Number(time[0])
  const minutes = Number(time[1])
  let newMinutes = minutes + addMinutes
  let addHours = 0
  let newHours = 0
  let newTime = ''

  if (newMinutes > 59) {
    addHours = Math.floor(newMinutes / 60)
    newMinutes = newMinutes % 60
  }

  newHours = hours + addHours
  if (newHours > 23) {
    while (newHours > 23) {
      newHours = newHours - 24
    }
  }

  if (newHours === 0) {
    newHours = '0' + newHours.toString()
  }

  if (newMinutes < 10) {
    newMinutes = '0' + newMinutes.toString()
  }

  newTime = newHours.toString() + ':' + newMinutes.toString()
  return newTime
}

console.log(increaseTimeByMinute('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numberSeries, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: uppercaseExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: increaseTimeByMinute // etc
}
