const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  },
}
console.log(JSON.stringify(obj)) // cannot pass invalid properties // obj to json
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // correct format // json to obj
