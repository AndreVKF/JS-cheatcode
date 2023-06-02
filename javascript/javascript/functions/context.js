const valor = "Global"

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = "Local"
  minhaFuncao() // function carries with itself its on context
  // place where has been created
}

exec()

// closure => function bring withitself place where it was created
const x = "Global"

function fora() {
  const x = "Local"
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
