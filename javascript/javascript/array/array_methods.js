const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // removes last element
console.log(pilotos)

pilotos.push("Verstappen") // insert element at last position
console.log(pilotos)

pilotos.shift() // remove first element
console.log(pilotos)

pilotos.unshift("Hamilton") // insert at first position
console.log(pilotos)

// splice can add and remove elements

const newPilotos = pilotos.slice(1, 3) // new partitioned array => return new array
console.log(newPilotos)
