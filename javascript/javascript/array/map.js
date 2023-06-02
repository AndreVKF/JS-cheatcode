// transform an array to another
// both have same length
// for with a return

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) {
  return e * 2
})
console.log(nums)
console.log(resultado)

const exponencial = (e) => e ** 2
let expNums = nums.map(exponencial)
console.log(expNums)

const convertToStr = (num) => `R$ ${num}`
let numsStr = nums.map(convertToStr)
console.log(numsStr)

let chained = nums
  .map((num) => num * 2)
  .map(exponencial)
  .map(convertToStr)
console.log(chained)

// json to obj
const carrinho = [
  '{"produto": "borracha", "preco": 10}',
  '{"produto": "caderno", "preco": 25}',
  '{"produto": "caneta", "preco": 2}',
]

const paraObj = (json) => JSON.parse(json)
const getPreco = (item) => item.preco

let precos = carrinho.map(paraObj).map(getPreco)
console.log(precos)

// create map
Array.prototype.map2 = function (callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }

  return newArray
}

let precos2 = carrinho.map2(paraObj).map2(getPreco)
console.log(precos2)
