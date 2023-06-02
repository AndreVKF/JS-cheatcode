// let => possui escopo de bloc
// var => var possui escopo global

{
  var a = 2
  let b = 3
  console.log(b)
}
// console.log(b) => raise exception
console.log(a)

// template string
const produto = "iPad"
console.log(`
  Este produto: ${produto}
  é caro
`)

// Destructuring
const [x, y, ...rest] = "Lupet Bolota"
console.log(x, y, rest)

const [n1, , n2] = [1, 2, 3]
console.log(n1, n2)

const { idade: i, nome } = { nome: "Lupete", idade: 6 }
console.log(i, nome)

// arrow function
// I -> good for one liners
// II -> anonymous functions
const soma = (a, b) => a + b // one liner doesn't need to explicit return
console.log(soma(2, 3))

// Arrow function (this) => has scope of where it is defined not where it is executed
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// default param
function log(text = "Node") {
  console.log(text)
}

log()
log("Priority")

// rest operator => many args
function total(...numeros) {
  let total = 0
  numeros.forEach((n) => (total += n))
  return total
}

console.log(total(1, 2, 3, 4, 5))

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// literal notation
const name = "Lupet"
const pessoa = {
  name,
  ola() {
    return "foom foom"
  },
}

console.log(pessoa.name, pessoa.ola)

// class
// converted to function
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "fom fom"
  } // code sweet
} // class is just a function

console.log(new Cachorro().falar())
