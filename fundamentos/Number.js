const peso1 = 1.0 // type Number for float and integer -> 2.0 == integer
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isFinite(peso2))

const total = 9.8 * peso1 + 7 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())

// warnings
console.log(7 / 0)
console.log("10" / 2)
console.log("3" + 2) // concatena e não soma => string tem prioridade
console.log("10,0" / 2)
console.log("show" * 2)
console.log(0.1 + 0.7)
// console.log(10.toString()) error
console.log((10.234).toFixed(2))

// Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)
