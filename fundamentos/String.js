const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3"))
console.log(escola.substring(0, 3))
console.log("Escola".concat(escola).concat("!"))
console.log(escola.replace(3, "e"))
console.log(escola.replace(/\d/g, "e"))
console.log("Ana,Maria,Pedro".split(","))

// Template strings ``
const nome = "Rebeca"
const concatenacao = "Ola" + nome + "!"
const templateStr = `
  Olá
  ${nome}
  !!`
const templateStr2 = `
1+1 = ${1 + 1}
`
console.log(templateStr)
console.log(templateStr2)
