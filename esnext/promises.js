// asynchronous functionability => returns a promise

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase) // resolves promises and returns (takes only one argument into resolve)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?:?"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e)) // in case of promise goes into reject

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3) // resolve callback returns only one attribute
}) // => something that will be resolved in the future

console.log(typeof p)

p.then(function (valor) {
  console.log(valor)
})

let p2 = new Promise(function (resolve) {
  resolve(["Lupet", "Ludovico", "Lupercio", "Bolota"])
})

function primeiroElemento(arrayEl) {
  return arrayEl[0]
}

p2.then(primeiroElemento)
  .then((primeiro) => primeiro[0])
  .then((letra) => console.log(letra))

function gerarNumerosAleat(min, max, tempo) {
  let [minN, maxN] = min > max ? [max, min] : [min, max]

  return new Promise((res, rej) => {
    setTimeout(function () {
      const fator = maxN - minN + 1
      const aleat = parseInt(Math.random() * fator) + minN
      res(aleat)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  // full parallel request
  return Promise.all([
    gerarNumerosAleat(1, 60, 1000),
    gerarNumerosAleat(3, 100, 3000),
    gerarNumerosAleat(10, 100, 2000),
    gerarNumerosAleat(1, 1000, 5000),
  ])
}

gerarVariosNumeros().then((numeros) => console.log(numeros))

function randomError(prct) {
  return new Promise((res, rej) => {
    if (Math.random() > prct) {
      res(true)
    } else {
      rej("error")
    }
  })
}

randomError(0.5)
  .then((v) => randomError(v))
  .then((v) => randomError(v))
  .catch((msg) => console.log(msg))
