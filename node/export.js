console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
  nome: "Teste",
}

console.log(module.exports)

// correct way
module.exports = { public: true }

// this and export => reference sambe object
// module.exports defines what will be exported
