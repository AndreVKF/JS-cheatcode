// array is an object where each key is numbered key
console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = new Array("Lupet", "Ludovico", "Bolota")
console.log(aprovados)

aprovados = ["Lupet", "Ludovico", "Bolota"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // returns undefined

aprovados[3] = "Lupercio"
aprovados.push("Bolotinha")
console.log(aprovados.length)

aprovados[9] = "Andre"
console.log(aprovados.length)
console.log(aprovados[8])
console.log(aprovados)

// sort
aprovados.sort() // mutate array

// delete
delete aprovados[1]

// splice => deletes based on indexes and add elements
aprovados.splice(1, 2) // deletes 2 elements from index 1
aprovados.splice(1, 0, "Teste") // adds element "Teste" at 1 position
console.log(aprovados)
