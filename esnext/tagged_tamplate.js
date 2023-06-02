// tagged templates - processa template dentro de uma função
// helps to control what has been passed into a template string

function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return "Outra String"
}

const aluno = "Gui"
const situacao = "Aprovado"
console.log(tag`${aluno} está ${situacao}`)

// work if parts
function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, index) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[index], valor)
  })
  return resultado.join("")
}

const preco = 29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)
