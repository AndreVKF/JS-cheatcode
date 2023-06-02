// JSON (javascript object notation) !== object
const prod1 = {} // colection key => value
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4999.98
prod1["Desconto legal"] = 0.4

console.log(prod1)

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  obj: {
    nome2: "Teste",
    obj2: {
      nome3: "Teste3",
    },
  },
}

// '{"nome": "Camisa Polo", "preco": 79.90}' => JSON => text format

console.log(prod2)

//

console.log(typeof Object) // => function
console.log(typeof new Object()) // => object

const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente())

class Produto {} // syntax sugar
console.log(typeof Produto)
console.log(typeof new Produto())
