const dog = {
  nome: "Lupet",
  idade: 6,
  peso: 27.5,
}

console.log(Object.keys(dog))
console.log(Object.keys(dog))
console.log(Object.entries(dog))

Object.entries(dog).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(dog, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "27/04/2017",
}) // change property of key value
console.log(dog)

// Object.assign (ECMA Script 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 10
console.log(obj)
