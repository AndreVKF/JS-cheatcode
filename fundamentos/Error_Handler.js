function tratarErro(erro) {
  // throw new Error('Error handling...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.msg,
    date: new Date(),
  }
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!")
  } catch (e) {
    tratarErro(e)
  } finally {
    console.log("final")
  }
}

const obj = { nome: "Roberto" }
imprimirNome(obj)
