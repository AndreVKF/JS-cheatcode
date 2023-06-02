const pessoa = {
  nome: "Lupet",
  sobrenome: "Bolota",
  idade: 6,
  peso: 27.5,
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
