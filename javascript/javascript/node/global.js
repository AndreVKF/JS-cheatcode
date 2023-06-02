console.log(global)
// !: don't do this

global.minhaApp = Object.freeze({
  saudacao() {
    return "Hello World"
  },
  name: "Sistema Legal",
})
