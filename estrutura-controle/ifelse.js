Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = (nota) => {
  if (nota.entre(9, 10)) {
    console.log("Quadro de honra")
  } else if (nota.entre(5, 8.99)) {
    console.log("Aprovado")
  } else if (nota.entre(3, 4.99)) {
    console.log("Recuperação")
  } else if (nota.entre(0, 2.99)) {
    console.log("Reprovado")
  } else {
    console.log("Nota inválida")
  }
}
