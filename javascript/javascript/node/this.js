console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log("Inside of a function")
  console.log("Normal Func: this === exports = ", this === exports)
  console.log(
    "Normal Func: this === module.exports = ",
    this === module.exports
  )
  console.log("Normal Func: this === global = ", this === global)
}

const arrowFunc = () => {
  console.log("Inside of a arrow function")
  console.log("Arrow Func: this === exports = ", this === exports)
  console.log("Arrow Func: this === module.exports = ", this === module.exports)
  console.log("Arrow Func: this === global = ", this === global)
}

logThis()
arrowFunc()
