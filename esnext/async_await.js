function esperarPor(tempo = 2000) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res()
    }, tempo)
  })
}

// return promise
esperarPor(2000)
  .then(() => console.log("Executando 1"))
  .then(() => esperarPor())
  .then(() => console.log("Executando 2"))
  .then(() => esperarPor())
  .then(() => console.log("Executando 3"))
  .then(() => esperarPor())

// asnc/await
async function executar() {
  console.log("Async/Await Executando 1")
  await esperarPor()

  console.log("Async/Await Executando 2")
  await esperarPor()

  console.log("Async/Await Executando 3")
  await esperarPor()
}

executar()

function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max]

  return new Promise((res, rej) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min

    if (numerosProibidos.includes(aleatorio)) {
      rej("Número repetido")
    } else {
      res(aleatorio)
    }
  })
}

async function gerarNumerosMegasena(qtdeNumeros) {
  const numeros = Array(qtdeNumeros).fill()
  let index = 0

  while (index < numeros.length) {
    try {
      numeros[index] = await gerarNumerosEntre(1, 60, numeros)
      index++
    } catch (err) {
      console.log(err)
    }
  }
  numeros.sort((a, b) => a - b)
  return numeros
}

gerarNumerosMegasena(20).then((numeros) => console.log(numeros))
