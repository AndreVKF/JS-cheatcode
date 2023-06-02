// Factory function => returns object
function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Silva",
  }
}

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  }
}

console.log(criarProduto("Notebook", 2799))
console.log(criarProduto("iPad", 1499))

// class vs factory function
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}!!`)
  }
}
const p1 = new Pessoa("Lupet")
p1.falar()

function PessoaFactoryFunc(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const PessoaArrowFunc = (nome) => {
  return {
    nome,
    falar: () => console.log(`Meu nome é ${nome}`), // context logic
  }
}

const p2 = PessoaArrowFunc("Ludovico")
p2.falar()
