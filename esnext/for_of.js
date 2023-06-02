// loops through values

for (let letra of "Lupet") {
  console.log(letra)
}

const assuntosEcma = ["Map", "Set", "Promise"]

for (let i in assuntosEcma) {
  console.log(i)
  console.log(assuntosEcma[i])
}

for (let assunto of assuntosEcma) {
  console.log(assunto)
}

// loop through map
const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
  console.log(chave)
}

for (let assunto of assuntosMap.values()) {
  console.log(assunto)
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl)
}

const s = new Set(["a", "b", "c"])
for (let letra of s) {
  console.log(letra)
}
