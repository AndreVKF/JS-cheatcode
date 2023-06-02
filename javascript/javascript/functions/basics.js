// literal
function fun1() {}

// anonymous
const fun2 = function () {}

// passing as func args
function run(fun) {
  fun()
}

run(function () {
  console.log("Hello World!!")
})

// params are always optionals
function area(largura, altura) {
  const paramsOk = largura && altura ? true : false

  if (paramsOk) {
    return largura * altura
  } else {
    console.log(`Params not okay: largura ${largura}; altura ${altura}`)
  }
}

area(3, 4)
area(3)

// arguments to get all params
function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(2, 3, 4))
console.log(soma(1, 2.2, 3, "Hello World"))
