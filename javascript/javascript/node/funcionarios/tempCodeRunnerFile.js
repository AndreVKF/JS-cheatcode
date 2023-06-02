const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const getChinese = (func) => func.pais === "China"
const getFuncFemale = (func) => func.genero === "F"
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then((response) => {
  const funcionarios = response.data
  // console.log(funcionarios)

  const chineseFemaleWithMenorSalario = funcionarios
    .filter(getChinese)
    .filter(getFuncFemale)
    .reduce(menorSalario)

  console.log(chineseFemaleWithMenorSalario)
})
