function imprimirSoma(a, b) {
  // fracamente tipada => argumentos não podem ter tipos especificados
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 3, 1, 5)
imprimirSoma()

function soma(a, b = 1) {
  // pode-se passar valores padroes
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
