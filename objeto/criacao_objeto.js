// literal
const obj1 = {}
console.log(obj1)

// Object prototype
const obj2 = new Object()
console.log(obj2)

// Constructor function
function Produto(nome, preco, desc) {
  let marca // arg privado
  this.nome = nome // arg publico

  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto("Caneta", 1234, 0.2)
console.log(p1, p1.getPrecoComDesconto())

// Factory Function
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalario() {
      return (salario / 30) * (30 - faltas)
    },
  }
}
const f1 = criarFuncionario("Lupet", 999, 5)
console.log(f1, f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Lupet"
console.log(filha)

// Object from JSON => JSON is text
const fromJSON = JSON.parse('{"info": "JSON"}')
console.log(fromJSON)

// ES Next
const a = 1
const b = 2
const c = 3

const obj3 = {
  a,
  b,
  c,
}

const nomeAttr = "nota"
const valorAttr = 7.87

const obj4 = {}
obj4[nomeAttr] = valorAttr

const obj5 = { [nomeAttr]: valorAttr }
console.log(obj4, obj5)

const objFunction = {
  funcao1: function () {},
  funcao2() {},
}

console.log(objFunction)
