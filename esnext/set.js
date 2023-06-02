// not indexed struct => doesn't allow repetition
const times = new Set()
times.add("Vasco")
times.add("São Paulo").add("Palmeiras").add("Corinthians")
times.add("Flamengo")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has("Vasco"))
console.log(times.has("vasco"))
times.delete("Flamengo")
console.log(times.has("Flamengo"))

const nomes = ["Lupet", "Bolota", "Ludovico", "Lupet"]
const newSet = new Set(nomes)
console.log(newSet)
