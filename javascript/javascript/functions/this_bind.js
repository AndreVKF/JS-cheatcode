// this -> para objeto global mais proximo
// ** node -> object
// ** browser -> window
// behaviour on function !== behaviour on arrow function
// ** on arrow function behaviour will always be defined on the creation not on execution

const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao)
  },
  falarArrow: () => {
    console.log(this.saudacao)
  }, // Arrow functions cannot be used to write object methods
}

pessoa.falar()

const falar = pessoa.falar
falar() // raise wrong befaviour: paradigm error

const falarDePessoa = pessoa.falar.bind(pessoa) // bounds execution
falarDePessoa()

function Pessoa() {
  this.idade = 0

  // method 1
  const self = this // local const to point to the created object

  setInterval(function () {
    self.idade++
    console.log(self.idade)
  }, 1000) // bound to local object

  // // method 2
  // setInterval(
  //   function () {
  //     this.idade++
  //     console.log(this.idade)
  //   }.bind(this),
  //   1000
  // ) // bound to local object
}

new Pessoa()
