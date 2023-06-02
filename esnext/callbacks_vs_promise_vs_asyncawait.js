// callback
const http = require("http")

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  http.get(url, (res) => {
    let resultado = ""

    res.on("data", (dados) => {
      resultado += dados
    })

    res.on("end", () => {
      callback(JSON.parse(resultado))
    })
  })
}

// callback hell
let nomes = []
getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`))

  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`))

    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`))
      console.log(nomes)
    })
  })
})

// promise
const http = require("http")
const getTurmaPromise = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = ""

      res.on("data", (dados) => {
        resultado += dados
      })

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado))
        } catch (err) {
          reject(err)
        }
      })
    })
  })
}

let nomesPromise = []
getTurmaPromise("A").then((alunos) => {
  nomesPromise = nomesPromise.concat(alunos.map((a) => `A: ${a.nome}`))
  getTurmaPromise("B").then((alunos) => {
    nomesPromise = nomesPromise.concat(alunos.map((a) => `B: ${a.nome}`))
    getTurmaPromise("C").then((alunos) => {
      nomesPromise = nomesPromise.concat(alunos.map((a) => `C: ${a.nome}`))
      console.log(nomesPromise)
    })
  })
})

// all promises
Promise.all([getTurmaPromise("A"), getTurmaPromise("B"), getTurmaPromise("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((result) => console.log(result))

getTurmaPromise("D").catch((err) => console.log(err))

// async/await
let obterAlunos = async () => {
  const ta = await getTurmaPromise("A")
  const tb = await getTurmaPromise("B")
  const tc = await getTurmaPromise("C")

  return [].concat(ta, tb, tc)
} // returns AsyncFunction

obterAlunos()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes))
