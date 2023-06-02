const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
})

console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar velha"
delete produto.tag
console.log(produto)

const pessoa = { nome: "Lupet", idade: 6 }
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "bolota"
delete pessoa.nome
pessoa.idade = 7
console.log(pessoa)

Object.freeze(pessoa) // prevents all changes to object
