const ferrari = {
  modelo: "F40",
  velMax: 324,
}

const volvo = {
  modelo: "V40",
  velMax: 200,
}

console.log(ferrari.__proto__) // access parent Prototype of object
console.log(ferrari.prototype === ferrari.__proto__) // prototype !== __proto__
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // reached final prototype => returns null

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

// prototype chain
Object.prototype.attr0 = "Z"
const avo = { attr1: "A" }
const pai = { __proto__: avo, attr2: "B", attr3: "Y" } // found in below scope
const filho = { __proto__: pai, attr3: "C" }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMai(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}`
  },
}

const porsche = {
  modelo: "F40",
  velMax: 324,
}

const audi = {
  modelo: "A3",
  status() {
    return `${this.modelo}: ${super.status()}`
  },
}

Object.setPrototypeOf(porsche, carro) // sets parent prototype
Object.setPrototypeOf(audi, carro)

console.log(porsche) // only shows args of object, but has all args from prototype
console.log(audi)

console.log(porsche.status())

// accessing args of parent prototype
const parent = { name: "Pedro", hairColor: "black" }

const son1 = Object.create(parent)
son1.name = "Bill"
console.log(son1.hairColor)

const son2 = Object.create(parent, {
  name: { value: "Jack", writable: false, enumerable: true },
})
console.log(son2.name)

for (let key in son2) {
  son2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança ${key}`)
}

// instantiate object
// __proto__ -> prototype of object
function myObject() {
  console.log(myObject.prototype)
}

const obj1 = new myObject()
const obj2 = new myObject()
console.log(obj1.__proto__ === obj2.__proto__)
console.log(myObject.prototype === obj1.__proto__)

myObject.prototype.name = "Anônimo"
myObject.prototype.speak = function () {
  console.log(`My name is ${this.name}`)
}

// first level chain
console.log(new myObject().__proto__ === myObject.prototype)
console.log(myObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// primitives
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
  // creates new function to a primitive
  return this.split("").reverse().join("") // this to access object args
}

console.log("Lupet Bolota".reverse())

Array.prototype.first = function () {
  return this[0]
}

// careful to not replace existing functions and attributes of object

function Aula(nome, videoId) {
  this.nome = nome
  this.videoId = videoId
}

const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula("Até Breve", 456)
console.log(aula1)

// create new behaviour
function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params) // structed params
  return obj
}

const aula3 = novo(Aula, "Bem Vindo", 123)
console.log(aula3)
