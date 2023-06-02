let dobro

dobro = (a) => {
  return 2 * a
} // anonymous function
// if encapsulats on {}, return should be explicit

dobro = (a) => 2 * a // one liner
// returns result of one liner

let ola
ola = (_) => console.log(_) // one param
ola("1")

function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade) // this wont change
    // arrow function bounds it to where it was created
  }, 1000)
}

new Pessoa()

// binding //
let comparaComThis = function (params) {
  console.log(this === params)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(this)
comparaComThis(obj)

let comparaComThisArrow = (params) => console.log(this === params)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // doesn't work
// arrow function > this
comparaComThisArrow(obj)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)
