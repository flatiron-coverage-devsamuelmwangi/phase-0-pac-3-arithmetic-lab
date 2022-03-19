// add(a, b) adds two numbers and returns the result
let add = (a, b) => a + b

// subtract(a, b) subtracts b from a and returns the result
let subtract = (a, b) => a - b

// divide(a, b) divides a by b and returns the result
let divide = (a, b) => a / b

// multiply(a, b) multiplies two numbers and returns the result
let multiply = (a, b) => a * b

// increment(n) increments n and returns the result
let increment = number => number += 1

// decrement(n) decrements n and returns the result
let decrement = number => number -= 1

// Parses n as an integer and returns the parsed integer
let makeInt = stringNumber => parseInt(stringNumber, 10)

// Preserves stringNumber\'s decimals (it parses n as a floating point number) and returns the parsed number
let preserveDecimal = stringNumber => parseFloat(stringNumber)
