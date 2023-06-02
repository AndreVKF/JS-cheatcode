const filhas = ["Ualeskah", "Cibalena"]
const filhos = ["Uoxition", "Uesclei"]

const todos = filhos.concat(filhas, "Fulano")
console.log(todos)

const todos2 = filhos.concat(filhas, ["Fulano", "Fulaninho"])
console.log(todos2)

const todos3 = filhos.concat(
  filhas,
  ["Fulano", "Fulaninho"],
  [["Teste", "Teste2"]]
)
console.log(todos3)
