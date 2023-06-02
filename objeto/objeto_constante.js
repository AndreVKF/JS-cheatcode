// pessoa -> memory -> {...}
const pessoa = { nome: "Lupet" }

Object.freeze(pessoa) // locks object

pessoa.nome = "Ludovico"
pessoa.tipo = "Peixe"
pessoa.novoNome = "Lupetao"
delete pessoa.nome

console.log(pessoa)
