const contadorA = require("./instanciaUnica") // instancia gets cached
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")() // factory function
const contadorD = require("./instanciaNova")() // factory function

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
