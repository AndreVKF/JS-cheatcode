// returns array with filtered products

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad", preco: 1500, fragil: false },
  { nome: "Glass Cup", preco: 10, fragil: true },
  { nome: "Plastic Cup", preco: 2.5, fragil: false },
]

// produtos caros
console.log(produtos.filter((prod) => prod.preco > 1000))

// produtos frageis
console.log(produtos.filter((prod) => prod.fragil))

const expensiveProd = (prod) => prod.preco > 1000
const isFragil = (prod) => prod.fragil

const expensiveAndFragil = produtos.filter(expensiveProd).filter(isFragil)
console.log(expensiveAndFragil)

Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }

  return newArray
}
