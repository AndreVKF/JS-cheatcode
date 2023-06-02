// Objects
const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumarada } = pessoa // returns undefined
const { novoNome = "Novo nome", varTeste = true } = pessoa // valor default

const {
  endereco: { logradouro, numero, cep },
} = pessoa
// console.log(endereco, logradouro, numero, cep) // endereco is not defined
console.log(logradouro, numero, cep)

// Array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [
  [, 8, 9],
  [9, 6, 8],
]
console.log(nota)

// Functions
function rand({ min = 0, max = 100 } = {}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 30 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand()) // raise exception

function rand2([min = 0, max = 100] = []) {
  if (min > max) [min, max] = [max, min]

  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
console.log(rand2([100, 20]))
console.log(rand2([200]))
console.log(rand2([, 10]))
console.log(rand2([]))
console.log(rand2())
