let numero = 1
{
  let numero = 2 // let respeita escopo de bloco
  console.log(numero)
}

console.log(numero)

for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log("i=", i) => raises exception

const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]() // => respeita escopo de function
