// key value par
// key attribute can be anything (string, number, function)
const technologies = new Map()
technologies.set("react", { framework: false })
technologies.set("angular", { framework: true })

console.log(technologies.react) // undefined
console.log(technologies.get("react"))

const chavesVariadas = new Map([
  [function () {}, "function"],
  [{}, "object"],
  [123, "number"],
])

chavesVariadas.forEach((vl, ch) => {
  console.log(vl, ch)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, "a")
chavesVariadas.set(123, "b") // persists => map cannot have repetition
chavesVariadas.set(456, "b")
console.log(chavesVariadas)
