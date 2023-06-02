// var é de escopo global ou de escopo de function

{
  {
    {
      {
        var sera = "será" // var não fica presa dentro de escopo de objeto
        // var => dentro da variavel global
        // pode ser acessada dentro de qualquer ponto do escopo global
        console.log(sera)
      }
    }
  }
}

console.log(sera)

function teste() {
  var local = 123
  console.log(local)
}

teste()
// console.log(local) => raise exception => presa dentro da function

var numero = 1
{
  var numero = 2
  console.log(numero)
}
console.log(numero)

for (var i = 0; i < 10; i++) {
  console.log(i)
}
console.log("i=", i)

const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]() // => não respeita escopo de function
