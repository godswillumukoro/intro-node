const operatingSystem = require('node:os')
const path = require('path')
const { add, subtract, multiply, divide } = require('./maths')

console.log(operatingSystem.type())
console.log(operatingSystem.version())
console.log(operatingSystem.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

console.log('-------------------------------');
console.log(add(6,8))
console.log(subtract(6,8))
console.log(multiply(6,8))
console.log(divide(6,8))