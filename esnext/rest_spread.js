// operador ...rest(juntar)/...spread(espalhar)
// rest como parametro de função

// spread como objeto
const funcionario = { name: "Lupet", salario: 1234.99 }
const clone = { ativo: true, ...funcionario } // different object
console.log(clone)

// spread com array
const grupoA = ["Lupet", "Bolota", "Ludovido"]
const grupoFinal = ["Lupetao", ...grupoA] // different array
console.log(grupoFinal)
